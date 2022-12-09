import ngcashLogo from '../../assets/NgCash.png'
import { Container } from '../Register/style'
import { Form } from '../../components/Form'


const Session = () => {
    
    return (
        <Container>
            <div className="divBlack">
                <img src={ ngcashLogo } />
            </div>

            <div className="divWhite">                
                <Form 
                apiProp="session" 
                historyProp="home" 
                titleProp="Login" 
                textProp="Don't have an account yet? " 
                linkProp=""
                />
            </div>
        </Container>
    )
}

export { Session }
