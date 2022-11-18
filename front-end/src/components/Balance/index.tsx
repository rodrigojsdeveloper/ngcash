import { Container } from "./style"


interface IBalanceProps {
    balance: number
}

const Balance = ({ balance }: IBalanceProps) => {

    return (
        <Container>
            <h1>Your Balance is</h1>

            <p>R$ { balance }</p>
        </Container>
    )
}

export { Balance }
