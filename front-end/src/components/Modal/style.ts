import styled from "styled-components"


const Container = styled.div`

    display: flex;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-modal);
`

const Content = styled.form`

`

export { Container, Content }
