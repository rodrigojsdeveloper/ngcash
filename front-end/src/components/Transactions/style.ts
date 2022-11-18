import styled from "styled-components"


const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .headerTransactions {

        padding: 40px 0;
        text-align: center;
        
        h1 {
            font-size: 29px;

            padding-bottom: 30px;
        }
    }

    & > div {

        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            padding-bottom: 30px;
        }
    }
`

export { Container }
