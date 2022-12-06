import noTransaction from '../../assets/noTransaction.png'
import { ITransactionProp } from '../../interfaces'
import { Container, Content } from './style'
import { api } from '../../services/api'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../Button'


const TransactionsKeyword = () => {

    const [ transactionsKeyword, setTransactionsKeyword ] = useState<ITransactionProp[]>([])

    const [ valueInput, setValueInput ] = useState<string>('')

    return (
        <Container>
            <header className="headerStyled">
                
                <h1>Transactions Keyword</h1>

                <div>
                    <Button
                    buttonStyle="home"
                    onClick={ () => {

                        api.get(`/transactions/${ valueInput }`, {

                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
                            }
                        })
                        .then(res => setTransactionsKeyword(res.data))
                        .catch(_ => toast.error('transaction does not exist or not found'))
                        
                        } 
                    }>Cash-in</Button>

                    <Button
                    buttonStyle="home"
                    onClick={ () => {

                        api.get(`/transactions/${ valueInput }`, {

                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
                            }
                        })
                        .then(res => setTransactionsKeyword(res.data))
                        .catch(_ => toast.error('transaction does not exist or not found'))
                        
                        } 
                    }>Cash-out</Button>  
                </div>
            </header>
            
            <div>
                {
                    transactionsKeyword.length > 0 ? (
                    
                        transactionsKeyword.map((transaction: ITransactionProp) => {

                            const formattedDate = transaction.createdAt.split('T')[0]

                            return (
                                <>
                                    {
                                        valueInput == 'cash-in' ? (

                                            <Content key={ transaction.id }>
                                                <div>
                                                    <p>Cash in</p>
                                                    <p>Date</p>
                                                </div>

                                                <div className="divValue">
                                                    <p className="credit">+ R$ { transaction.value.toFixed(2) }</p>
                                                    <p>{ formattedDate }</p>
                                                </div>
                                            </Content>

                                        ) : (

                                            <Content key={ transaction.id }>
                                                <div>
                                                    <p>Cash out</p>
                                                    <p>Date</p>
                                                </div>

                                                <div className="divValue">
                                                    <p className="debt">- R$ { transaction.value.toFixed(2) }</p>
                                                    <p>{ formattedDate }</p>
                                                </div>
                                            </Content>

                                        )
                                    }
                                </>
                            )
                        })
                    
                    ) : (

                        <>
                            <h2>You haven't searched for any transactions yet</h2>
    
                            <img src={ noTransaction } />
                        </>
                    )
                }
            </div>
        </Container>
    )
}

export { TransactionsKeyword }
