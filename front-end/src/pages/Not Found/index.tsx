import { Container } from "./style"
import notFound from "../../assets/Oops! 404 Error with a broken robot-rafiki.svg"
import { Button } from "../../components/Button"


const NotFound = () => {

    return (
        <Container>
            <div>
                <h1>Ooops!</h1>

                <p>We couldn't find the page you were looking for, <b>let's try again</b>.</p>

                <Button>Go to home</Button>
            </div>

            <img src={ notFound } alt="error" title="error" />
        </Container>
    )
}

export { NotFound }
