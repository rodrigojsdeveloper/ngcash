import styled from 'styled-components'


const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 15px;
    border-radius: 4px;
    background: var(--dark-white-background);
    border: 1px solid var(--border-color-button);

    margin-bottom: 10px;

    & > div {

        display: flex;
        flex-direction: row;

        p {
            margin-left: 15px;
        }
    }

    data {
        font-weight: bold;
    }

    @media (max-width: 320px) {

        flex-direction: column;
        align-items: center;

        data {
            padding-top: 15px;
        }
    }
`

export { Container }
