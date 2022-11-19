import styled, { keyframes } from 'styled-components'


const animateMenuOpen = keyframes`
    
    from {

        width: 4em;
    }
    to {

        width: 18%;
    }
`
const animateMenuClose = keyframes`
    
    from {
        width: 18%;
    } 
    to {
    
        width: 4em;
    }
`

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
        justify-content: space-between;
        padding: 0 20px;

        color: var(--background);

        button.b-menu {
            border: 0;
            background: var(--transparent);

            img{
                width: 2em;
            }
        }
    }
`

const Content = styled.main`

    padding-top: 72px;

    display: flex;
    height: 100vh;

    nav.open {
        height: 100%;
        width: 18%;
        background: var(--background-side-menu);
        animation: ${ animateMenuOpen } 1s ease-out;
        
        & > div {
            padding: 20px 10px;
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
    
    nav.close {
        height: 100%;
        min-width: 4em;
        background: var(--background-side-menu);
        animation: ${ animateMenuClose } 1s ease-out;
    
        & > div {
            display: flex;
            padding: 20px 0;
            cursor: pointer;

            padding-left: 20px;
            font-size: 20px;
            
            p {
                display: none;
            }

            :hover {
                background: var(--color);
            }

            img {
                height: 1.2em;
            }
        }
    }

    & > div {
        width: 100%;
    }

    @media (max-width: 1024px) {

        nav.open {
            display: none;
        }
    }
`

export { Container, Content }
