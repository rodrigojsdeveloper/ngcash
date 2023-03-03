import { IStyledButtonProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button`

  border-radius: 4px;
  transition: 0.5s;
  border: 1.2182px solid;

  font-weight: 600;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ buttonStyle }: IStyledButtonProps) => {
    switch (buttonStyle) {
      case "register":
        return css`
          margin-top: 10px;
          width: 100%;
          height: 50px;
          background-color: var(--color-black);
          color: var(--color-white);
          border-color: var(--color-black);
          box-shadow: var(--color-white) 0 1px 0 0 inset;

          :hover {
            box-shadow: unset;
          }
        `
      case "home":
        return css`
          width: 100%;
          max-width: 125px;
          height: 48px;
          background-color: var(--color-white-2);
          color: var(--color-black);
          border-color: var(--shadow-3);

          :hover,
          :focus {
            border-color: var(--shadow-3);
            box-shadow: var(--shadow-2) 0 4px 12px;
            color: var(--shadow-4);
          }

          :hover {
            transform: translateY(-1px);
          }

          :active {
            background-color: var(--color-white-3);
            border-color: var(--shadow-3);
            box-shadow: var(--shadow) 0 2px 4px;
            color: var(--shadow-4);
            transform: translateY(0);
          }
        `;
      default:
        return false;
    }
  }}
`;

export { Container };
