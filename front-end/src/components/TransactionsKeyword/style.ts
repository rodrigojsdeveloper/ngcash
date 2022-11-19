import styled from 'styled-components'


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
            border-radius: 5px;
            border: 1.5px solid var(--color);

            &:focus::-webkit-input-placeholder {
                color: var(--transparent);
            }
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

const Content = styled.div`

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

export { Container, Content }
