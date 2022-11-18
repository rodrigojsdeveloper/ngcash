import styled from "styled-components"


const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    padding: 10px;

    h1 {
        padding-bottom: 30px;
    }

    p {
        padding: 20px 50px;
        background: var(--color);
        color: var(--background);

        border-radius: 10px;
        font-weight: bold;

        :hover {
            background: var(--green);
            transform: scale(1.1);
        }
    }
`

export { Container }
