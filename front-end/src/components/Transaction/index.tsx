import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./style"


interface ITransaction {
    creditedAccountId: string
    debitedAccountId: string
    value: number
    createdAt: string
    id: string
}

const Transaction = (transaction: any) => {

    const [ balanceCredit, setBalanceCreadit ] = useState<any>()

    const [ balanceDebt, setBalanceDebt ] = useState<any>()
    
    useEffect(() => {

        api.post(`/accounts/${ transaction.creditedAccountId }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setBalanceCreadit(res.data.balance))
        .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        api.post(`/accounts/${ transaction.debitedAccountId }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setBalanceDebt(res.data.balance))
        .catch(err => console.error(err))

    }, [])
    
    return (
        <Container>
            <div>
                <p>{ balanceCredit } R$ 900.00</p>
                <p>{ balanceDebt } R$ 900.00</p>
            </div>

            <div>
                <p className="credit">+ { transaction.value } R$ 100.00</p>
                <p className="debt">- { transaction.value } R$ 100.00</p>
            </div>
        </Container>
    )
}

export { Transaction }
