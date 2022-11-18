import { Container } from "./style"


export interface ITransactionProps {
    id: string
    value: number
    createdAt: string
    creditedAccountId: string
    debitedAccountId: string
}

const Transaction = ({ id, value, createdAt }: any) => {

    return (
        <Container>
            <div>
                <p>Cash in</p>
                <p>Cash out</p>
            </div>

            <div className="divValue">
                <p className="credit">+ R$ { value }</p>
                <p className="debt">- R$ { value }</p>
            </div>
        </Container>
    )
}

export { Transaction }
