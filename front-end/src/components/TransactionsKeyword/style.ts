import styled from "styled-components"


const Container = styled.div`

    width: 100%;

    .headerStyled {

        display: flex;
        padding: 20px 10px;
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

        padding: 15px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;

        h2 {
            padding-bottom: 30px;
        }

        img {
            width: 100%;
        }

        @media (min-width: 768px) {

            img {
                width: unset;
            }
        }
    }
`

export { Container }
