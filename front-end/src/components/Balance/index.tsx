import { Container } from "./style"


interface IBalance {
    balance: any
}

const Balance = ({ balance }: IBalance) => {

    return (
        <Container>
            <h1>Your Balance is</h1>

            <p>{ balance }</p>
        </Container>
    )
}

export { Balance }
