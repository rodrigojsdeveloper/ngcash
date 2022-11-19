import styled, { css } from 'styled-components'


interface IStyledButtonProps {
    buttonStyle: 'register' | 'home'
}

const Container = styled.button`

    border-radius: 4px;
    transition: .5s;
    border: 1.2182px solid;

    font-weight: 600;

    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    ${ ({ buttonStyle }: IStyledButtonProps) => {

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
                    border-color: var(--color);

                    :hover {
                        box-shadow: 0 0.5em 0.5em -0.4em var(--color);
                    }
                `
            case 'home':
                return css`
                    
                    width: 100%;
                    max-width: 125px;
                    height: 48px;
                    background: var(--dark-white-background);
                    color: var(--color);
                    border-color: var(--border-color-button);

                    :hover,
                    :focus {
                        border-color: var(--border-color-button);
                        box-shadow: var(--shadow-button) 0 4px 12px;
                        color: var(--shadow-button-2);
                    }

                    :hover {
                        transform: translateY(-1px);
                    }

                    :active {
                        background-color: var(--background-button-home);
                        border-color: var(--border-color-button);
                        box-shadow: var(--shadow-button-3) 0 2px 4px;
                        color: var(--shadow-button-2);
                        transform: translateY(0);
                    }
                `
            default:
                return false
        }
    }}
`

export { Container }
