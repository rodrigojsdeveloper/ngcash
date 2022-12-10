import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './style'


const Balance = () => {

    const [ username, setUsername ] = useState<string>('')


    return (
        <Container>
            <h1>Hi { username }, your balance is</h1>

            <p>US$ {}</p>
        </Container>
    )
}

export { Balance }
