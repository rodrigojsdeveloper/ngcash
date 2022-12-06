import styled, { keyframes } from 'styled-components'


const animacaoForm = keyframes`
    
    from {
        opacity: 0;
        transform: translatey(-50px);
    }
    
    to {
        opacity: 1;
        transform: translateX(0px);
}
`

const Container = styled.form`

    background: var(--background);
    animation: ${ animacaoForm }  1s;

    max-width: 400px;
    width: 100%;
    height: 400px;
    
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    padding: 20px;

    p {
        margin-top: 10px;
        font-size: 13.5px;
    }

    & > main {

        width: 100%;
        max-width: 250px;
        padding-top: 40px;
    }
`

export { Container, animacaoForm }
