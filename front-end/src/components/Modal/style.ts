import styled from "styled-components"


const Container = styled.form`

    width: 100%;
    max-width: 500px;
    height: 100%;

    border-radius: 8px;
    padding: 10px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    
    & > div {
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        main {

            padding-top: 40px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            label {

                color: var(--red);
                font-size: 12px;
            }

            input {
                transition: 0.4s;
                
                &:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                
                &::placeholder {
                    color: gray;
                }

                width: 100%;
                max-width: 250px;
                height: 48px;
                padding: 10px 1rem;
                border-radius: 8px;
                border: 1.5px solid black;

                margin: 10px 0;
                
                background: var(--background);
                align-items: center;
                flex: 1;
                color: var(--color);
            }
        }
    }
`

export { Container }
