import { Transaction } from "../Transaction"
import { Container } from "./style"
import noTransaction from "../../assets/noTransaction.png"


const Transactions = (transactions: any) => {

    return (
        <Container>
            <header className="headerTransactions">
                <h1>Transactions</h1>
            </header>

            <div>
                {
                    transactions.length > 0 ? (
                    
                        transactions.filter((transaction: any) => <Transaction transaction={ transaction } />)
                    
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
