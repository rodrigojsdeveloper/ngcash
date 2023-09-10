import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);
  background: var(--color-white);
  box-shadow: var(--shadow-blue) 6px 2px 16px 0px;

  padding: 10px 30px;
  margin: -125px 10px 0 10px;

  animation: ${animationForm} 1s;

  & > h2 {
    font-size: 25px;
  }

  & > p {
    margin-top: 15px;
    font-size: 13.5px;

    & > a {
      color: var(--shadow-4);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > form {
    width: 100%;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 15px;
  }

  @media (max-width: 320px) {
    & > p {
      display: flex;
      flex-direction: column;
      text-align: center;

      & > a {
        margin-top: 3px;
      }
    }
  }
`;

export { Container };
