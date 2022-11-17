import styled from "styled-components"
import { animacaoForm } from "../../components/Form/style"


const Container = styled.div`

    display: flex;

    img {
        width: 60%;
        height: 100vh;
        animation: ${animacaoForm} 1s;
    }

    div {
        background: var(--color);
        width: 40%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1050px) {
        
        img {
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
