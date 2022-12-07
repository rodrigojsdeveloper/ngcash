import { ITransactionProp, IUserProp } from '../../interfaces'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './style'


const Transaction = () => {

    const [ user, setUser ] = useState<IUserProp>()

    useEffect(() => {

        api.get('/users/profile', {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
            }
        })
        .then(res => setUser(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <>
            {
                user?.accountId.debitedTransaction.map((debt: ITransactionProp) => {

                    const newDate = debt.createdAt.split('T')[0]
                    
                    return (
                    <Container>
                        <div>
                            <p>Cash-out</p>
                            <p>Date</p>
                        </div>

                        <div className="divValue">
                            <p className="debt">- US$ { debt.value.toFixed(2) }</p>
                            <p>{ newDate }</p>
                        </div>
                    </Container>
                )
                })
            
            }
            {
                user?.accountId.creditedTransaction.map((credit: ITransactionProp) => {

                    const newDate = credit.createdAt.split('T')[0]

                    return (
                        <Container>
                            <div>
                                <p>Cash-in</p>
                                <p>Date</p>
                            </div>
    
                            <div className="divValue">
                                <p className="credit">+ US$ { credit.value }</p>
                                <p>{ newDate }</p>
                            </div>
                        </Container>
                    )
                })
            }
        </>
    )
}

export { Transaction }
