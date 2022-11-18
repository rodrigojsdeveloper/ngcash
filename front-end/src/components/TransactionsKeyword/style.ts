import styled from "styled-components"


const Container = styled.div`

    width: 100%;

    .headerStyled {

        display: flex;
        padding: 20px;
        justify-content: center;

        input {
            width: 100%;
            max-width: 550px;
            padding: 10px;
            margin: 0 10px;
            border-radius: 10px;
            border: 1.5px solid var(--color);

        }
    }

    & > div {

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;

        h2 {
            padding-bottom: 30px;
        }
    }
`

export { Container }
