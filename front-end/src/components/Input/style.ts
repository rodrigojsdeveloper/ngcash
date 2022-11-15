import styled, { css } from "styled-components"


const Container = styled.div`

    text-align: left;
    
    div {

        margin-bottom: 20px;
        font-weight: 400;
        font-size: 12.182px;

        span {
        }
    }
`

const InputContainer = styled.div`
    
    max-width: 329.93px;
    width: 100%;
    height: 48px;
    display: flex;
    transition: 0.4s;

    input {

        background: transparent;
        align-items: center;
        flex: 1;
        padding: 0 10px;
        border-radius: 4px;
        border: 1.2182px solid;

        ${props => props.isErrored && css`

            :focus {}
            `
        }
        
        &::placeholder {
            color: var(--botao-secundario);
            font-size: 16.2426px;
        }
        
        &:disabled {
            opacity: .5;
            cursor: not-allowed;
        }
    }

`

export { Container, InputContainer }
