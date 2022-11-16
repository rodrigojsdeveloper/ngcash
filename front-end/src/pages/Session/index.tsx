import { Redirect } from "react-router-dom"
import session from "../../assets/Tablet login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "../Register/style"


const Session = (authetication: any, setAuthentication: any) => {

    if(authetication) {

        <Redirect to="/home" />
    }

    return (
        <Container>
            <div>
                <Form apiProp="session" buttonProp="Log in" buttonRequestProp="Connecting..." historyProp="home" titleProp="Login" />
            </div>

            <img src={ session } alt="session" title="session" />
        </Container>
    )
}

export { Session }
