import register from '../../assets/Mobile login-bro.svg'
import ngcashLogo from '../../assets/NgCash.png'
import { Form } from '../../components/Form'
import { Container } from './style'


const Register = () => {

    return (
        <Container>
            <img src={ register } alt="SVG - Register" title="Register" />

            <div>
                <img src={ ngcashLogo } />

                <Form 
                apiProp="users" 
                historyProp="session" 
                titleProp="Register" 
                textProp="Already have an account? " 
                linkProp="session" 
                />
            </div>
        </Container>
    )
}

export { Register }
