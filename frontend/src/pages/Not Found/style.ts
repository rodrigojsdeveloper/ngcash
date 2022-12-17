import styled from "styled-components";

const Container = styled.div`

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
  }

  font-size: 62.5%;
  background-color: #000;
  font-family: "Hack", monospace;
  text-align: center;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    height: 30px;
    line-height: 30px;
    font-size: 2rem;
  }

  p {
    margin-top: 30px;
    height: 20px;
    line-height: 20px;
    font-size: 1rem;
  }
`;

export { Container };
