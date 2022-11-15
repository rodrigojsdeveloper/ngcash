import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { api } from "../../services/api"
import { Container } from "./style"


const Home = (setAuthetication: boolean) => {

    const history = useHistory()

    const [ balance, setBalance ] = useState<any>()

    const [ transactions, setTransactions ] = useState<any>()

    const [ value, setValue ] = useState<string>('')

    const [ transactionsKeyword, setTransactionsKeyword ] = useState<any>()

    useEffect(() => {

        api.post('/account', {

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
        .then(res => setTransactions(res))
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
                <div></div>

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
    )
}

export { Home }
