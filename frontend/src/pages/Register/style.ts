import { animacaoForm } from '../../components/Form/style'
import styled from 'styled-components'


const Container = styled.div`

    display: flex;

    & > img {
        width: 60%;
        height: 100vh;
        animation: ${ animacaoForm } 1s;
    }

    div {
        background: var(--color);
        width: 40%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        img {
            animation: ${ animacaoForm }  1s;
        }
    }

    @media (max-width: 1050px) {
        
        & > img {
            display: none;
        }

        div {

            width: 100%;
            height: 100vh;
            padding: 15px;
        }
    }
`

export { Container }
