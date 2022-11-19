import { Container } from "./style"


const Transaction = ({ transaction }: any) => {

    return (
        <Container>
            <div>
                <p>Cash in</p>
                <p>Cash out</p>
            </div>

            <div className="divValue">
                <p className="credit">+ R$ { transaction.value }</p>
                <p className="debt">- R$ { transaction.value }</p>
            </div>
        </Container>
    )
}

export { Transaction }
