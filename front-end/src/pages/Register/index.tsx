import register from '../../assets/Mobile login-bro.svg'
import { Form } from '../../components/Form'
import { ISession } from '../../interfaces'
import { Container } from './style'


const Register = ({ authentication, setAuthentication }: ISession) => {

    return (
        <Container>
            <img src={ register } alt="SVG - Register" title="Register" />

            <div>
                <Form 
                apiProp="users" 
                historyProp="session" 
                titleProp="Register" 
                textProp="Already have an account? " 
                linkProp="session" 
                authentication={ authentication } 
                setAuthentication={ setAuthentication } 
                />
            </div>
        </Container>
    )
}

export { Register }
