import styled from 'styled-components'


const Container = styled.div`

    label {

        color: var(--red);
        font-size: 12px;

        padding-top: 10px;
    }
`

const InputContainer = styled.input`

    transition: 0.4s;

    &:focus::-webkit-input-placeholder {
        color: var(--transparent);
    }

    &:focus {
        border-color: var(--color);
    }
    
    &::placeholder {
        color: var(--gray);
    }

    width: 100%;
    max-width: 250px;
    height: 48px;
    padding: 10px 1rem;
    border-radius: 4px;
    border: 1.5px solid var(--border-input);

    margin: 10px 0;
    
    align-items: center;
    color: var(--color);
`

export { Container, InputContainer }
