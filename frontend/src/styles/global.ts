import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --background: #fff;
        --background-form: rgb(38, 50, 56);
        --background-modal: rgba(0, 0, 0, 0.5);
        --color: #000;
        --color-box-shadow-header: rgba(0, 0, 0, 0.25);
        --red: #c53030;
        --green: green;
        --dark-white-background: #F8F8FF;
        --transparent: transparent;
        --gray: gray;
        --background-side-menu: #0d0d0d;
        --border-color-button: rgba(0, 0, 0, 0.15);
        --background-button-home: #F0F0F1;
        --shadow-button: rgba(0, 0, 0, 0.1);
        --shadow-button-2: rgba(0, 0, 0, 0.65);
        --shadow-button-3: rgba(0, 0, 0, 0.06);
        --border-input: #dcdcdc;
        --box-shadow-form: rgba(136, 165, 191, 0.48);
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    input[type=number] {
        -moz-appearance:textfield;
    }
`
