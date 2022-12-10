import ngcashLogo from '../../assets/NgCash.png'
import { Form } from '../../components/Form'
import { Container } from './style'


const Register = () => {

    return (
        <Container>
            <div className="divBlack">
                <img src={ ngcashLogo } alt="logo ng.cash" />
            </div>

            <div className="divWhite">

                <Form 
                apiProp="users" 
                historyProp="session" 
                titleProp="Register" 
                textProp="Already have an account? " 
                linkProp="session"
                textLinkProp="go to login"
                />
                
            </div>
        </Container>
    )
}

export { Register }
