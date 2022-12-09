import ngcashLogo from '../../assets/NgCash.png'
import { Form } from '../../components/Form'
import { Container } from './style'


const Register = () => {

    return (
        <Container>
            <div className="divBlack">
                <img src={ ngcashLogo } />
            </div>

            <div className="divWhite">

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
