import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
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

    const [ openModel, setOpenModel ] = useState<any>(false)

    const [ transaction, setTransaction ] = useState<any>()

    const [ user, setUser ] = useState<IUser | any>()

    const addTransactions = (transaction: object) => setTransactions([ ...transactions, transaction ])

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

                    <Button onClick={ () => { 

                        history.push('/session')

                        setAuthetication(false)
                        
                        localStorage.removeItem('Project NG.CASH: token')

                    } }>Log out</Button>
                </header>

                <div>
                    <div>
                        <Button onClick={ () => setOpenModel(true) }>entrar</Button>

                        <div>
                            <Transaction transaction={ transaction } />
                        </div>
                    </div>

                    <div>
                        <div>{ transactions }</div>
                    </div>

                    <div>
                        <div>
                            <input />
                            <Button>submit</Button>
                        </div>

                        <div>{ transactionsKeyword }</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export { Home }
