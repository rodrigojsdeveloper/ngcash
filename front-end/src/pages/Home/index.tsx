import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"
import { Transaction } from "../../components/Transaction"
import { api } from "../../services/api"
import { Container } from "./style"


interface IUser {
    id: string
    username: string
    password: string
    accountId: string
}

const Home = (setAuthetication: any) => {

    const history = useHistory()

    const [ balance, setBalance ] = useState<any>()

    const [ transactions, setTransactions ] = useState<any>()

    const [ value, setValue ] = useState<string>('')

    const [ transactionsKeyword, setTransactionsKeyword ] = useState<any>()

    const [ openModel, setOpenModel ] = useState(false)

    const [ transaction, setTransaction ] = useState<any>()

    const [ user, setUser ] = useState<IUser | any>()

    const [ filteredKeyword, setFilteredKeyword ] = useState<any>()

    const [ valueInput, setValueInput ] = useState("")

    const addTransactions = (transaction: object) => setTransactions([ ...transactions, transaction ])
    /* 
    useEffect(() => {

        api.get('/users/profile',  {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setUser(res))
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {

        api.post(`/accounts/${ user.accountId }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setBalance(res))
        .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        api.get('/transactions', {
            
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => addTransactions(res))
        .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        api.get(`/transactions/${ value }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setTransactionsKeyword(res))
        .catch(err => console.error(err))
    })
    */
    return (
        <>
            {
                openModel && 
                <Modal
                setOpenModel={ setOpenModel }
                addTransactions={ addTransactions }
                setTransaction={ setTransaction }
                />
            }
            <Container>
                <header>
                    <h2>{ balance }</h2>

                    <Button buttonStyle="home" onClick={ () => { 

                        history.push('/session')

                        setAuthetication(false)
                        
                        localStorage.removeItem('Project NG.CASH: token')

                    } }>Log out</Button>
                </header>
                
                <div>
                    <div className="divTransaction">
                        <button onClick={ () => setOpenModel(true) }>entrar</button>

                        <div>
                            <Transaction transaction={ transaction } />
                        </div>
                    </div>

                    <div>
                        <div>{ transactions }</div>
                    </div>

                    <div className="divKeyword">
                        <div className="divInputButtonKeyword">
                            <Input
                            placeholder="Pesquisar"
                            value={ valueInput }
                            onChange={ (e: any) => setValueInput(e.target.value) }
                            />

                            <Button
                            buttonStyle="home"
                            onClick={ () => {

                                if(valueInput == 'cash-in') {

                                    setFilteredKeyword(transactions.filter((transaction: any) => transaction.creditedTransaction.toLowerCase().includes(valueInput.toLowerCase())))
                                }

                                if(valueInput == 'cash-out') {

                                    setFilteredKeyword(transactions.filter((transaction: any) => transaction.debitedTransaction.toLowerCase().includes(valueInput.toLowerCase())))
                                }

                                setFilteredKeyword(transactions.filter((transaction: any) => transaction.createdAt.toLowerCase().includes(valueInput.toLowerCase())))
                                
                            } }
                            >submit</Button>    
                        </div>

                        <div className="divDivKeyword">{ transactionsKeyword }</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export { Home }
