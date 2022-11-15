import styled, { css } from "styled-components"


const Container = styled.button`

    border-radius: 4px;
    transition: .5s;

    border: 1.2182px solid;

    :hover {

    }

    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    ${ (props: any) => {

        switch(props.lenButton) {

            case 'registe':
                return css`
                    width: 100%;
                    max-width: 324px;
                    height: 48px;
                `
        }
    }}
`

export { Container }
