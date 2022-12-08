import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './style'


const Balance = () => {

    const [ username, setUsername ] = useState<string>('')

    const [ balance, setBalance ] = useState<number>(0)

    const token = localStorage.getItem('Project NG.CASH: token')

    useEffect(() => {

        api.get('/users/profile', {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ token }`,
            }
        })
        .then(res => {

            setUsername(res.data.username)

            api.get(`/accounts/${ res.data.accountId.id }`, {

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ token }`,
                }
            })
            .then(res => setBalance(res.data.balance))
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <h1>Hi { username }, your balance is</h1>

            <p>US$ { balance.toFixed(2) }</p>
        </Container>
    )
}

export { Balance }
