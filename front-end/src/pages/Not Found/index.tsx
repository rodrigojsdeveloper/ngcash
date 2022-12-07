import notFound from '../../assets/404 Error Page not Found with people connecting a plug-rafiki.svg'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { Container } from './style'


const NotFound = () => {

    const history = useHistory()

    return (
        <Container>
            <div>
                <h1>Ooops!</h1>

                <p>We couldn't find the page you were looking for, <b>let's try again</b>.</p>

                <Button buttonStyle="register" onClick={ () => history.push('/') }>Go to registration page</Button>
            </div>

            <img src={ notFound } alt="SVG - Page not found" title="Page not found" />
        </Container>
    )
}

export { NotFound }
