import session from '../../assets/Tablet login-bro.svg'
import { Container } from '../Register/style'
import { Form } from '../../components/Form'
import { ISession } from '../../interfaces'


const Session = ({ authentication, setAuthentication }: ISession) => {
    
    return (
        <Container>
            <div>
                <Form 
                apiProp="session" 
                historyProp="home" 
                titleProp="Login" 
                textProp="Don't have an account yet? " 
                linkProp="" 
                authentication={ authentication } 
                setAuthentication={ setAuthentication }
                />
            </div>

            <img src={ session } alt="session" title="session" />
        </Container>
    )
}

export { Session }
