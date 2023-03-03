import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  & > div:nth-child(1) {
    height: 40vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    background: var(--color-black);

    & > img {
      width: 150px;
      object-fit: contain;
      margin-top: 40px;

      animation: ${animationForm} 1s;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export { Container };
