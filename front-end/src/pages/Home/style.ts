import styled from "styled-components"


const Container = styled.div`

    .headerStyle {

        position: fixed;
        height: 72px;
        width: 100%;
        background: var(--color);
        box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 20px;

        color: var(--background);
    }
`

const Content = styled.main`

    padding-top: 72px;

    display: flex;
    height: 100vh;

    nav {
        width: 20%;

        background: #0d0d0d;

        & > div {
            padding: 20px 0;
            cursor: pointer;

            padding-left: 25px;
            font-size: 20px;
            color: var(--background);

            display: flex;

            :hover {
                background: var(--color);
            }

            img {
                padding-right: 15px;
            }
        }
    }

    & > div {
        width: 80%;
    }
`

export { Container, Content }
