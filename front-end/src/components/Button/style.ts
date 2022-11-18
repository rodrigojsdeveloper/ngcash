import styled, { css } from "styled-components"


interface IStyledButtonProps {
    buttonStyle: 'register' | 'home'
}

const Container = styled.button<IStyledButtonProps>`

    border-radius: 4px;
    transition: .5s;

    border: 1.2182px solid;

    :hover {

    }

    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    ${ ({ buttonStyle }) => {

        switch(buttonStyle) {

            case 'register':
                return css`
                    margin-top: 20px;

                    width: 100%;
                    max-width: 250px;
                    height: 50px;

                    background: var(--color);
                    color: var(--background);

                    border-radius: 8px;
                `
            case 'home':
                return css`
                    width: 100%;
                    max-width: 125px;
                    height: 48px;

                    background: var(--dark-white-background);
                    color: var(--color);
                `
            default:
                return false
        }
    }}
`

export { Container }
