import styled from "styled-components"


const Container = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    padding: 10px;

    div {
    
        h1 {
            font-size: 38px;
            line-height: 50px;
        }
    
        p {
            font-size: 16px;
            width: 100%;
            max-width: 334px;
            line-height: 24px;
            padding: 15px 0 25px 0;
        }
    }
    
    @media (max-width: 850px) {
        flex-direction: column;
    
        img {
            padding-top: 50px;
        }
    }
    
    @media (max-width: 470px) {
    
        img {
            width: 100%;
        }
    }
`

export { Container }
