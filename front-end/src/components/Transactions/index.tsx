import { Transaction } from "../Transaction"
import { Container } from "./style"
import noTransaction from "../../assets/noTransaction.png"
import { ITransactionProps } from "../Transaction"


const Transactions = ({ transactions }: any) => {

    console.log(transactions)

    return (
        <Container>
            <header className="headerTransactions">
                <h1>Transactions</h1>
            </header>

            <div>
                {
                    transactions.length > 0 ? (
                    
                        transactions.map((transaction: any) => <Transaction transaction={ transaction } />)
                    
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
