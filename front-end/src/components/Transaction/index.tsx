import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./style"


const Transaction = (transaction: any) => {

    const [ balanceCredit, setBalanceCreadit ] = useState<any>()

    const [ balanceDebt, setBalanceDebt ] = useState<any>()

    useEffect(() => {

        api.post(`/accounts/${ transaction.creditedAccountId }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setBalanceCreadit(res))
        .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        api.post(`/accounts/${ transaction.debitedAccountId }`, {

            headers: {
                Authorization: `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`
            }
        })
        .then(res => setBalanceDebt(res))
        .catch(err => console.error(err))

    }, [])

    return (
        <Container>
            <div>
                <p>{ balanceCredit }</p>
                <p>{ balanceDebt }</p>
            </div>

            <div>
                <p>{ transaction.value }</p>
                <p> - { transaction.value }</p>
            </div>
        </Container>
    )
}

export { Transaction }
