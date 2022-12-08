import noTransaction from '../../assets/noTransaction.png'
import { ITransactionProps } from '../../interfaces'
import { Container, Content } from './style'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Button } from '../Button'
import { useState } from 'react'


const TransactionsKeyword = () => {

    const [ transactionsKeyword, setTransactionsKeyword ] = useState<ITransactionProps[]>([])

    const [ transactionsKeywordDate, setTransactionsKeywordDate ] = useState<ITransactionProps[]>([])

    const [ valueInput, setValueInput ] = useState<string>('')

    const token = localStorage.getItem('Project NG.CASH: token')

    return (
        <Container>
            <header className="headerStyled">
                
                <h1>Transactions Keyword</h1>

                <div>
                    <Button
                    buttonStyle="home"
                    onClick={ () => {

                        setValueInput('cash-in')

                        api.get('/transactions/cash-in', {

                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${ token }`,
                            }
                        })
                        .then(res => setTransactionsKeyword(res.data))
                        .catch(_ => toast.error('transaction does not exist or not found'))
                        
                        } 
                    }>Cash-in</Button>

                    <Button
                    buttonStyle="home"
                    onClick={ () => {

                        setValueInput('cash-out')

                        api.get('/transactions/cash-out', {

                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${ token }`,
                            }
                        })
                        .then(res => setTransactionsKeyword(res.data))
                        .catch(_ => toast.error('transaction does not exist or not found'))
                        
                        } 
                    }>Cash-out</Button>

                    <input 
                    type="date"
                    onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
                       
                        api.get(`/transactions/${ e.target.value }`, {

                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${ token }`,
                            }
                        })
                        .then(res => setTransactionsKeywordDate(res.data))
                        .catch(_ => toast.error('transaction does not exist or not found'))
                    } }
                    />
                </div>
            </header>
            
            <div>
                {
                    transactionsKeywordDate.length > 0 ? (

                        transactionsKeywordDate.map((transaction: ITransactionProps) => {

                            const formattedDate = transaction.createdAt.split('T')[0]

                            return (
                                    <Content key={ transaction.id }>
                                        <div>
                                            <p>Cash</p>
                                            <p>Date</p>
                                        </div>

                                        <div className="divValue">
                                            <p>US$ { transaction.value.toFixed(2) }</p>
                                            <p>{ formattedDate }</p>
                                        </div>
                                    </Content>
                            )
                        })

                    ) : (
                    
                        transactionsKeyword.length > 0 ? (
                    
                            transactionsKeyword.map((transaction: ITransactionProps) => {
    
                                const formattedDate = transaction.createdAt.split('T')[0]
    
                                return (
                                    <>
                                        {
                                            valueInput == 'cash-in' ? (
    
                                                <Content key={ transaction.id }>
                                                    <div>
                                                        <p>Cash-in</p>
                                                        <p>Date</p>
                                                    </div>
    
                                                    <div className="divValue">
                                                        <p className="credit">+ US$ { transaction.value.toFixed(2) }</p>
                                                        <p>{ formattedDate }</p>
                                                    </div>
                                                </Content>
    
                                            ) : (
    
                                                <Content key={ transaction.id }>
                                                    <div>
                                                        <p>Cash-out</p>
                                                        <p>Date</p>
                                                    </div>
    
                                                    <div className="divValue">
                                                        <p className="debt">- US$ { transaction.value.toFixed(2) }</p>
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
                    )
                }
            </div>
        </Container>
    )
}

export { TransactionsKeyword }
