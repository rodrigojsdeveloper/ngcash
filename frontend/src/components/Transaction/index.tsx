import { ITransactionComponentProps } from '../../interfaces'
import { GrTransaction } from 'react-icons/gr'
import { Container } from './style'


const Transaction = ({ transaction }: ITransactionComponentProps) => {

    const formattedDate = transaction.createdAt.split('T')[0]

    return (
        <Container>
            <div>
                <GrTransaction />
                <p>US$ { transaction.value }</p>
            </div>

            <data>{ formattedDate }</data>
        </Container>
    )
}

export { Transaction }
