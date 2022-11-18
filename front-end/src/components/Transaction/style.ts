import styled from "styled-components"


const Container = styled.div`

    background: var(--dark-white-background);
    width: 100%;
    max-width: 700px;

    display: flex;
    justify-content: space-between;

    padding: 20px;

    margin: 10px 0;

    & div {
        
        text-align: end;

        p {

            padding: 10px 0;
        }

        .credit {
            color: var(--green);
        }

        .debt {
            color: var(--red);
        }
    }
`

export { Container }
