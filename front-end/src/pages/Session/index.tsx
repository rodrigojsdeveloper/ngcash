import session from '../../assets/Tablet login-bro.svg'
import { Container } from '../Register/style'
import { Form } from '../../components/Form'
import { ISingup } from '../../interfaces'


const Session = ({ authentication, setAuthentication }: ISingup) => {
    
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
