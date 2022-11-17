import { Redirect } from "react-router-dom"
import register from "../../assets/Mobile login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "./style"


const Register = (authetication: any, setAuthentication: any) => {

    if(authetication) {

        <Redirect to='/home' />
    }

    return (
        <Container>
            <img src={ register } alt="register" title="register" />

            <div>
                <Form apiProp="users" buttonProp="Register" buttonRequestProp="Registering..." historyProp="session" titleProp="Register" textProp="Already have an account? " linkProp="session" />

            </div>
        </Container>
    )
}

export { Register }
