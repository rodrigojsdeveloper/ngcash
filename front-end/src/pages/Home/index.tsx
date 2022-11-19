import { TransactionsKeyword } from '../../components/TransactionsKeyword'
import { FormTransaction } from '../../components/FormTransaction'
import iconMenu from '../../assets/close-to-menu-transition.svg'
import iconTransactions from '../../assets/transactions.svg'
import { Transactions } from '../../components/Transactions'
import iconBalance from '../../assets/account-balance.svg'
import iconTransaction from '../../assets/transaction.svg'
import iconKeyword from '../../assets/symbol-keyword.svg'
import { Balance } from '../../components/Balance'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { Container, Content } from './style'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'


const Home = () => {

    const history = useHistory()

    const [ openTransactions, setOpenTransactions ] = useState<boolean>(false)

    const [ openTransactionsKeyword, setOpenTransactionsKeyword ] = useState<boolean>(false)

    const [ openBalance, setOpenBalance ] = useState<boolean>(false)

    const [ openTransaction, setOpenTransaction ] = useState<boolean>(false)

    const [ transactions, setTransactions ] = useState<any>()

    const [ style, setStyle ] = useState<boolean>(false)

    const addTransactions = (transaction: any) => setTransactions([ ...transactions, transaction ])

    useEffect(() => {

        api.get('/transactions', {
            
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
            }
        })
        .then(res => setTransactions(res.data))
        .catch(err => console.error(err))
    }, [])
    
    return (
        <Container>
            <header className="headerStyle">
                <div>
                    <button id="button" className='b-menu' onClick={ () => {

                        if(style) {
                            setStyle(false)
                        
                        } else {

                            setStyle(true)
                        }
                    } }>
                        <img src={ iconMenu } alt="" />
                    </button>
                </div>

                <Button buttonStyle="home" onClick={ () => { 

                    history.push('/session')
                    
                    localStorage.removeItem('Project NG.CASH: token')

                } }>Log out</Button>
            </header>

            <Content>
                <nav className={ style ? "close" : "open" }>
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
                        <FormTransaction addTransactions={ addTransactions } />
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
                        <Balance />
                    }
                </div>
            </Content>
        </Container>
    )
}

export { Home }
