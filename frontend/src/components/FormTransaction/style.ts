import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 350px;

  margin: 0 auto;
  padding: 10px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);
  background-color: var(--color-white);

  & > h2 {
    text-align: center;
    color: var(--color-black);
  }

  & > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding-top: 30px;
  }

  @media (max-width: 375px) {
    padding: 15px;
  }
`;

export { Container };
