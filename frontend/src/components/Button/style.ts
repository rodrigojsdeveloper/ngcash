import { IStyledButtonProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button`
  width: 100%;

  font-weight: 600;
  font-size: 16px;

  border-radius: var(--border-radius);
  border: 1.2182px solid;

  transition: 0.5s;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ buttonStyle }: IStyledButtonProps) => {
    switch (buttonStyle) {
      case "register":
        return css`
          margin-top: 10px;
          height: 50px;

          color: var(--color-white);
          border-color: var(--color-black);
          background-color: var(--color-black);
          box-shadow: var(--color-white) 0 1px 0 0 inset;

          &:hover {
            box-shadow: unset;
          }
        `;

      case "dashboard":
        return css`
          height: 48px;
          max-width: 125px;

          color: var(--color-black);
          border-color: var(--shadow-3);
          background-color: var(--color-white-2);
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
