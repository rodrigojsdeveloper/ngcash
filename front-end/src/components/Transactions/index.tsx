import noTransaction from '../../assets/noTransaction.png'
import { ITransactionProp } from '../../interfaces'
import { Transaction } from '../Transaction'
import { Container } from './style'


const Transactions = ({ transactions }: any) => {

    return (
        <Container>
            <header className="headerTransactions">
                <h1>Transactions</h1>
            </header>

            <div>
                {
                    transactions.length > 0 ? (
                    
                        <Transaction />
                    
                    ) : (

                        <>
                            <h2>Você ainda não tem nenhuma transação</h2>

                            <img src={ noTransaction } />
                        </>
                    )
                }
            </div>
        </Container>
    )
}

export { Transactions }
