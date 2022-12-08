import { TransactionsKeyword } from '../../components/TransactionsKeyword'
import { FormTransaction } from '../../components/FormTransaction'
import iconMenu from '../../assets/close-to-menu-transition.svg'
import iconTransactions from '../../assets/transactions.svg'
import { Transactions } from '../../components/Transactions'
import iconBalance from '../../assets/account-balance.svg'
import iconTransaction from '../../assets/transaction.svg'
import { IHome, ITransactionProp } from '../../interfaces'
import iconKeyword from '../../assets/symbol-keyword.svg'
import logout from '../../assets/outline-logout.svg'
import { Balance } from '../../components/Balance'
import { useHistory } from 'react-router-dom'
import { Container, Content } from './style'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'


const Home = ({ setAuthentication }: IHome) => {

    const history = useHistory()

    const [ openTransactions, setOpenTransactions ] = useState<boolean>(false)

    const [ openTransactionsKeyword, setOpenTransactionsKeyword ] = useState<boolean>(false)

    const [ openBalance, setOpenBalance ] = useState<boolean>(true)

    const [ openTransaction, setOpenTransaction ] = useState<boolean>(false)

    const [ transactions, setTransactions ] = useState<ITransactionProp[]>([])

    const [ style, setStyle ] = useState<boolean>(false)

    const addTransactions = (transaction: ITransactionProp) => setTransactions([ ...transactions!, transaction ])

    useEffect(() => {

        api.get('/transactions', {
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ localStorage.getItem('Project NG.CASH: token') }`,
            }
        })
        .then(res => setTransactions(res.data))
        .catch(err => console.error(err))
    }, [])
    
    return (
        <Container>
            <header className="headerStyle">
                <div>
                    <button id="button" className="b-menu" onClick={ () => {

                        if(style) {
                            setStyle(false)
                        
                        } else {

                            setStyle(true)
                        }
                    } }>
                        <img src={ iconMenu } alt="Menu" />
                    </button>
                </div>
            </header>

            <Content>
                <nav className={ style ? "close" : "open" }>

                    <div className="divNav">
                        <div onClick={ () => {
                                setOpenTransaction(true)
                                setOpenTransactions(false)
                                setOpenTransactionsKeyword(false)
                                setOpenBalance(false)
                                } }>
                            <img src={ iconTransaction } />
                            <p>Transaction</p>
                        </div>

                        <div onClick={ () => {
                                setOpenTransactions(true)
                                setOpenTransaction(false)
                                setOpenTransactionsKeyword(false)
                                setOpenBalance(false)
                            } }>
                            <img src={ iconTransactions } />
                            <p>Transactions</p>
                        </div>

                        <div onClick={ () => {
                                setOpenTransactionsKeyword(true)
                                setOpenTransaction(false)
                                setOpenTransactions(false)
                                setOpenBalance(false)
                            } }>
                            <img src={ iconKeyword } />
                            <p>Transactions Keyword</p>
                        </div>
                        
                        <div onClick={ () => {
                                setOpenBalance(true)
                                setOpenTransaction(false)
                                setOpenTransactions(false)
                                setOpenTransactionsKeyword(false)
                                } }>
                            <img src={ iconBalance } />
                            <p>Balance</p>
                        </div>
                    </div>

                    <div className="divLogOut" onClick={ () => {

                        toast.success('Check back often!')

                        history.push('/session')

                        localStorage.removeItem('Project NG.CASH: token')

                        setAuthentication(false)

                    } }>
                        <p>Log out</p>
                        <img src={ logout } />
                    </div>
                </nav>

                <div>
                    {
                        openTransaction && 
                        <FormTransaction addTransactions={ addTransactions } />
                    }
                    {
                        openTransactions &&
                        <Transactions transactions={ transactions } />
                    }
                    {
                        openTransactionsKeyword &&
                        <TransactionsKeyword />
                    }
                    {
                        openBalance &&
                        <Balance />
                    }
                </div>
            </Content>
        </Container>
    )
}

export { Home }
