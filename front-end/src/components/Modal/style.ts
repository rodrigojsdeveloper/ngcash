import styled from "styled-components"
import { animacaoForm } from "../Form/style"

/*
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
*/
const Container = styled.form`

    width: 100%;
    max-width: 500px;
    height: 100%;

    border-radius: 8px;
    padding: 10px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    
    & > div {
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        main {

            padding-top: 40px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

export { Container }
