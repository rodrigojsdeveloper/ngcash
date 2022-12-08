import session from '../../assets/Computer login-bro.svg'
import ngcashLogo from '../../assets/NgCash.png'
import { Container } from '../Register/style'
import { Form } from '../../components/Form'


const Session = () => {
    
    return (
        <Container>
            <div>
                <img src={ ngcashLogo } />
                
                <Form 
                apiProp="session" 
                historyProp="home" 
                titleProp="Login" 
                textProp="Don't have an account yet? " 
                linkProp=""
                />
            </div>

            <img src={ session } alt="SVG - Login" title="Login" />
        </Container>
    )
}

export { Session }
