import noTransaction from '../../assets/noTransaction.png'
import { ITransactionProp } from '../../interfaces'
import { Container, Content } from './style'
import { api } from '../../services/api'
import { Button } from '../Button'
import { useState } from 'react'


const TransactionsKeyword = () => {

    const [ transactionsKeyword, setTransactionsKeyword ] = useState<ITransactionProp[]>([])

    const [ value, setValue ] = useState<string[]>(['cash-in', 'cash-out'])

    const [ valueInput, setValueInput ] = useState<string>('')

    return (
        <Container>
            <header className="headerStyled">
                <input
                placeholder="Pesquisar"
                value={ valueInput }
                onChange={ (e: any) => setValueInput(e.target.value) }
                />

                <Button
                buttonStyle="home"
                onClick={ () => {

                    const prop = value.filter(v => v == valueInput)

                    api.get(`/transactions/${ prop }`, {

                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
                        }
                    })
                    .then(res => setTransactionsKeyword(res.data))
                    .catch(err => console.error(err))
                    
                    } 
                }>Submit</Button>  
            </header>
            
            <div>
                {
                    transactionsKeyword.length > 0 ? (
                    
                        transactionsKeyword.map((transaction: ITransactionProp) => {

                            const newDate = transaction.createdAt.split('T')[0]

                            return (
                                <>
                                    {
                                        valueInput == 'cash-in' ? (

                                            <Content>
                                                <div>
                                                    <p>Cash in</p>
                                                    <p>Date</p>
                                                </div>

                                                <div className="divValue">
                                                    <p className="credit">+ R$ { transaction.value.toFixed(2) }</p>
                                                    <p>{ newDate }</p>
                                                </div>
                                            </Content>

                                        ) : (

                                            <Content>
                                                <div>
                                                    <p>Cash out</p>
                                                    <p>Date</p>
                                                </div>

                                                <div className="divValue">
                                                    <p className="debt">- R$ { transaction.value.toFixed(2) }</p>
                                                    <p>{ newDate }</p>
                                                </div>
                                            </Content>

                                        )
                                    }
                                </>
                            )
                        })
                    
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

export { TransactionsKeyword }
