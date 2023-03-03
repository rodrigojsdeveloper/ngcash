import { animacaoForm } from "../../components/Form/style";
import styled from "styled-components";

const Container = styled.div`

  .divBlack {
    height: 40vh;
    background: var(--color);

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

    form {
      margin-top: -125px;
      box-shadow: var(--box-shadow-form) 6px 2px 16px 0px;
    }
  }
`;

export { Container };
