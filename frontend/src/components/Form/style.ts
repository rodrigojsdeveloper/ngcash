import styled, { keyframes } from "styled-components";

const animacaoForm = keyframes`
    
    from {
        opacity: 0;
        transform: translatey(-50px);
    }
    
    to {
        opacity: 1;
        transform: translateX(0px);
}
`;

const Container = styled.form`
  background: var(--background);
  animation: ${animacaoForm} 1s;

  max-width: 400px;
  width: 100%;
  height: 400px;

  padding: 10px 30px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  h1 {
    font-size: 25px;
  }

  p {
    margin-top: 15px;
    font-size: 13.5px;

    a {
      color: var(--shadow-button-2);

      :hover {
        text-decoration: underline;
      }
    }
  }

  & > main {
    width: 100%;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 320px) {
    p {
      display: flex;
      flex-direction: column;
      text-align: center;

      a {
        margin-top: 3px;
      }
    }
  }
`;

export { Container, animacaoForm };
