import register from '../../assets/Mobile login-bro.svg'
import { Form } from '../../components/Form'
import { Container } from './style'


const Register = () => {

    return (
        <Container>
            <img src={ register } alt="register" title="register" />

            <div>
                <Form apiProp="users" historyProp="session" titleProp="Register" textProp="Already have an account? " linkProp="session" />
            </div>
        </Container>
    )
}

export { Register }
