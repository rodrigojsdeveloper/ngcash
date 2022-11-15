import register from "../../assets/Tablet login-bro.svg"
import { Form } from "../../components/Form"
import { Container } from "./style"


const Register = () => {

    return (
        <Container>
            <img src={ register } alt="register" title="register" />

            <div>
                <Form apiProp="users" buttonProp="submit" />
            </div>
        </Container>
    )
}

export { Register }
