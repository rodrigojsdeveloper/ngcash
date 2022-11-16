import styled from "styled-components"


const Container = styled.form`

    background: var(--background);

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

    & > main {

        width: 100%;
        max-width: 250px;
        padding-top: 40px;
    }
`

export { Container }
