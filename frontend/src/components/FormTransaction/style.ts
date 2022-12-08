import styled from 'styled-components'


const Container = styled.form`

    height: 100%;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        
        width: 100%;
        max-width: 250px;

        h1 {
            text-align: center;
        }

        main {

            padding-top: 30px;

            display: flex;
            flex-direction: column;

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
    }
`

export { Container }
