import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: var(--border-radius);
  background-color: var(--color-white-2);
  border: 1px solid var(--shadow-3);
  
  padding: 15px;
  margin-bottom: 10px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > p {
      margin-left: 15px;
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;

    & > b {
      padding-top: 10px;
    }
  }
`;

export { Container };
