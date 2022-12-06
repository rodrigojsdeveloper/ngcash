import styled from 'styled-components'


const Container = styled.form`

    height: 100%;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        
        width: 100%;
        max-width: 250px;

        h1 {
            text-align: center;
        }

        main {

            padding-top: 30px;

            display: flex;
            flex-direction: column;
        }
    }
`

export { Container }
