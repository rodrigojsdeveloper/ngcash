import { Redirect } from "react-router-dom"
import session from "../../assets/Mobile login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "./style"


const Session = (authetication: boolean, setAuthentication: boolean) => {

    if(authetication) {

        <Redirect to="/home" />
    }

    return (
        <Container>
            <img src={ session } alt="session" title="session" />

            <div>
                <Form apiProp="session" buttonProp="submit" historyProp="home" setAuthentication={ setAuthentication } />
            </div>
        </Container>
    )
}

export { Session }
