import styled from "styled-components"
import { animacaoForm } from "../Form/style"


const Container = styled.div`

    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-modal);

    padding: 15px;
`

const Content = styled.form`

    background: var(--background);
    width: 100%;
    max-width: 400px;
    height: 400px;

    animation: ${animacaoForm} 1s;

    border-radius: 8px;
    padding: 10px;

    text-align: center;

    & > div {

        display: flex;
        justify-content: flex-end;
        align-items: center;

        padding: 10px;

        button {

            padding: 8px;
            background: var(--color);
            color: var(--background);
            border: none;
            
            border-radius: 5px;
        }
    }

    & > main {

        padding-top: 40px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export { Container, Content }
