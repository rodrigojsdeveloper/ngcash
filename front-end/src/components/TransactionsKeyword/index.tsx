import noTransaction from '../../assets/noTransaction.png'
import { Transaction } from '../Transaction'
import { api } from '../../services/api'
import { Container } from './style'
import { Button } from '../Button'
import { useState } from 'react'


const TransactionsKeyword = () => {

    const [ transactionsKeyword, setTransactionsKeyword ] = useState([])

    const [ value, setValue ] = useState(['cash-in', 'cash-out'])

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
                    
                        transactionsKeyword.map((transaction: any) => <Transaction transaction={ transaction } />)
                    
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
