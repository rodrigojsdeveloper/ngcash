import { animacaoForm } from "../../components/Form/style";
import styled from "styled-components";

const Container = styled.div`

  .divBlack {
    height: 40vh;
    background: var(--color-black);

    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 150px;
      object-fit: contain;
      margin-top: 40px;

      animation: ${animacaoForm} 1s;
    }
  }

  .divWhite {
    display: flex;
    justify-content: center;
  }
`;

export { Container };
