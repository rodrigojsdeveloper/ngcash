import styled from 'styled-components'


const Container = styled.div`

    background: var(--background-side-menu);
    color: var(--background);
    width: 100%;
    max-width: 700px;

    display: flex;
    justify-content: space-between;

    padding: 20px;

    margin: 10px 0;

    .divValue {
        text-align: end;
    }

    & div {
    
        p {
            padding: 10px 0;
            font-weight: bold;
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
