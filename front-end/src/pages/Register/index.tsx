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
                <Form apiProp="users" buttonProp="register" historyProp="session" titleProp="Register" />
            </div>
        </Container>
    )
}

export { Register }
