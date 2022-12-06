import styled from 'styled-components'


const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;

    h1 {
        padding-bottom: 30px;
        transition: 1s;
    }

    p {
        padding: 20px 50px;
        background: var(--color);
        color: var(--background);
        border-radius: 5px;
        font-weight: bold;

        :hover {
            background: var(--green);
            box-shadow: 0 0.5em 0.5em -0.4em var(--green);
        }
    }

    @media (max-width: 375px) {

        h1 {
            font-size: 18px;
        }
    }
`

export { Container }
