import styled from "styled-components"


const Container = styled.input`

    transition: 0.4s;
    
    &:focus::-webkit-input-placeholder {
        color: transparent;
    }
    
    &::placeholder {
        color: gray;
    }

    width: 100%;
    max-width: 250px;
    height: 48px;
    padding: 10px 1rem;
    border-radius: 8px;
    border: 1.5px solid black;

    margin: 10px 0;
    
    background: var(--background);
    align-items: center;
    flex: 1;
    color: var(--color);
`

export { Container }
