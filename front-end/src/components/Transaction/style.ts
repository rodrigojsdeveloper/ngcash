import styled from "styled-components"


const Container = styled.div`

    background: yellow;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 20px;

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
