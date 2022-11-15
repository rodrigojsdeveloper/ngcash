import session from "../../assets/Mobile login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "./style"


const Session = () => {

    return (
        <Container>
            <img src={ session } alt="session" title="session" />

            <div>
                <Form apiProp="session" buttonProp="submit" />
            </div>
        </Container>
    )
}

export { Session }
