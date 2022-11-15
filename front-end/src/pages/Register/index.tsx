import { Redirect } from "react-router-dom"
import register from "../../assets/Tablet login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "./style"


const Register = (authetication: boolean, setAuthentication: boolean) => {

    if(authetication) {

        <Redirect to='/home' />
    }

    return (
        <Container>
            <img src={ register } alt="register" title="register" />

            <div>
                <Form apiProp="users" buttonProp="submit" historyProp="session" setAuthentication={ setAuthentication } />
            </div>
        </Container>
    )
}

export { Register }
