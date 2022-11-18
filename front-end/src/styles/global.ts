import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root {
        --background: rgba(255, 255, 255, 9);
        --background-form: rgb(38, 50, 56);
        --background-modal: rgba(0, 0, 0, 0.5);
        --color: rgba(0, 0, 0, 1);
        --color-box-shadow-header: rgba(0, 0, 0, 0.25);
        --red: #c53030;
        --green: green;
        --dark-white-background: #F8F8FF
    }

    body {
        background: var(--background);
        color: var(--color);
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`
