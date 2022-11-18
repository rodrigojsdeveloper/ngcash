import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Balance } from "../../components/Balance"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"
import { Transaction } from "../../components/Transaction"
import { Transactions } from "../../components/Transactions"
import { TransactionsKeyword } from "../../components/TransactionsKeyword"
import { api } from "../../services/api"
import { Container, Content } from "./style"
import iconBalance from "../../assets/account-balance.svg"
import iconTransaction from "../../assets/transaction.svg"
import iconKeyword from "../../assets/symbol-keyword.svg"
import iconTransactions from "../../assets/transactions.svg"


interface ITransaction {
    creditedAccountId: string
    debitedAccountId: string
    value: number
    createdAt: string
    id: string
}

const Home = (setAuthetication: any) => {

    const history = useHistory()

    const [ openTransactions, setOpenTransactions ] = useState(false)

    const [ openTransactionsKeyword, setOpenTransactionsKeyword ] = useState(false)

    const [ openBalance, setOpenBalance ] = useState(false)

    const [ openTransaction, setOpenTransaction ] = useState(false)

    const [ balance, setBalance ] = useState<any>()

    const [ transactions, setTransactions ] = useState<any>()

    const addTransactions = (transaction: object) => setTransactions([ ...transactions, transaction ])
    
    useEffect(() => {

        api.get('/users/profile', {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => {

            api.get(`/accounts/${ res.data.accountId.id }`, {

                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
                }
            })
            .then(res => setBalance(res.data.balance))
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {

        api.get('/transactions', {
            
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setTransactions(res.data))
        .catch(err => console.error(err))
    }, [])
    
    return (
        <Container>
            <header className="headerStyle">

                <Button buttonStyle="home" onClick={ () => { 

                    history.push('/session')

                    setAuthetication(false)
                    
                    localStorage.removeItem('Project NG.CASH: token')

                } }>Log out</Button>
            </header>

            <Content>
                <nav>
                    <div onClick={ () => {
                            setOpenTransaction(true)
                            setOpenTransactions(false)
                            setOpenTransactionsKeyword(false)
                            setOpenBalance(false)
                            } }>
                        <img src={ iconTransaction } />
                        <p>Transaction</p>
                    </div>

                    <div onClick={ () => {
                            setOpenTransactions(true)
                            setOpenTransaction(false)
                            setOpenTransactionsKeyword(false)
                            setOpenBalance(false)
                        } }>
                        <img src={ iconTransactions } />
                        <p>Transactions</p>
                    </div>

                    <div onClick={ () => {
                            setOpenTransactionsKeyword(true)
                            setOpenTransaction(false)
                            setOpenTransactions(false)
                            setOpenBalance(false)
                        } }>
                        <img src={ iconKeyword } />
                        <p>Transactions Keyword</p>
                    </div>
                    
                    <div onClick={ () => {
                            setOpenBalance(true)
                            setOpenTransaction(false)
                            setOpenTransactions(false)
                            setOpenTransactionsKeyword(false)
                            } }>
                        <img src={ iconBalance } />
                        <p>Balance</p>
                    </div>
                </nav>

                <div>
                    {
                        openTransaction && 
                        <Modal addTransactions={ addTransactions } setOpenTransaction={ setOpenTransaction } />
                    }
                    {
                        openTransactions &&
                        <Transactions transactions={ transactions } />
                    }
                    {
                        openTransactionsKeyword &&
                        <TransactionsKeyword />
                    }
                    {
                        openBalance &&
                        <Balance balance={ balance } />
                    }
                </div>
            </Content>
        </Container>
    )
}

export { Home }
