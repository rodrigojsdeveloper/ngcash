import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./style"


const Balance = () => {

    const [ balance, setBalance ] = useState<number>(0)

    useEffect(() => {

        api.get('/users/profile', {

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
            }
        })
        .then(res => {

            api.get(`/accounts/${ res.data.accountId.id }`, {

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
                }
            })
            .then(res => setBalance(res.data.balance))
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <h1>Your Balance is</h1>

            <p>R$ { balance }</p>
        </Container>
    )
}

export { Balance }
