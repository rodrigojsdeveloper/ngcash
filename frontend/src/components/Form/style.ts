import styled, { keyframes } from 'styled-components'


const animacaoForm = keyframes`
    
    from {
        opacity: 0;
        transform: translatey(-50px);
    }
    
    to {
        opacity: 1;
        transform: translateX(0px);
}
`

const Container = styled.form`

    background: var(--background);
    animation: ${ animacaoForm }  1s;

    max-width: 400px;
    width: 100%;
    height: 400px;
    
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    padding: 20px;

    p {
        margin-top: 10px;
        font-size: 13.5px;

        a {
            color: var(--shadow-button-2);
        }
    }

    & > main {

        width: 100%;
        max-width: 250px;
        padding-top: 40px;

        label {

            color: var(--red);
            font-size: 12px;

            padding-top: 10px;
        }

        & > div {
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            transition: 0.4s;

            width: 100%;
            max-width: 250px;
            height: 48px;
            padding: 10px 1rem;
            border-radius: 4px;
            border: 1.5px solid var(--border-input);

            background: var(--background);

            margin: 10px 0;

            align-items: center;
            color: var(--color);
            
            &:hover {
                border-color: var(--color);
            }
            
            input {
                
                height: 100%;
                width: 100%;

                margin-left: 12.5px;
                
                border: none;
                
                &:focus::-webkit-input-placeholder {
                    color: var(--transparent);
                }

                &::placeholder {
                    color: var(--gray);
                }
            }
        }
    }
`

export { Container, animacaoForm }
