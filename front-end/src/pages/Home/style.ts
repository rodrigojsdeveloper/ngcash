import styled from "styled-components"


const Container = styled.div`

    header {

        position: fixed;
        height: 72px;
        width: 100%;
        background: var(--color);
        box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    & > div {

        padding-top: 72px;

        display: flex;
        justify-content: space-around;

        & > div {

            width: 100%;
            max-width: 500px;
            background: var(--color);
            border-radius: 10px;
            margin: 25px 0;

            height: 100vh;

            padding: 20px;
        }

        .divTransaction {
            display: flex;
            flex-direction: column;
            align-items: center;

            & > div {
                background: purple;
                width: 100%;
                
                margin-top: 30px;
            }
        }

        .divKeyword {
            display: flex;
            flex-direction: column;
            align-items: center;

            .divInputButtonKeyword {
            }

            .divDivKeyword {
                width: 100%;
                background: red;

                margin-top: 30px;
                height: 100vh;
            }
        }
    }
`

export { Container }
