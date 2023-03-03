import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  background-color: var(--color-black);

  & > h2 {
    height: 30px;
    line-height: 30px;
    font-size: 28px;
  }

  & > a {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    margin-top: 30px;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: var(--color-white);
    }
  }
`;

export { Container };
