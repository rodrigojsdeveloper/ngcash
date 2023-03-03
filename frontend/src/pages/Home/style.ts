import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 40px;

  & > div {
    width: 100%;
    max-width: 800px;
    height: 850px;

    padding: 20px;
    border-radius: 4px;

    color: var(--color-white);
    background-color: var(--color-black);

    & > img {
      width: 30px;
      float: right;
      cursor: pointer;
    }

    & > h1,
    & > h2 {
      font-weight: 500;
      font-size: 70px;

      padding: 80px 0 30px 0;
      text-align: center;

      transition: 1s;
    }

    & > p {
      width: 100%;
      max-width: 140px;

      font-size: 20px;
      font-weight: 600;

      margin: 0 auto;
      padding: 10px;

      text-align: center;
      border: 1px solid var(--color-white);
    }
  }

  & > main {
    width: 100%;
    max-width: 700px;

    text-align: center;
    margin: 50px 0 0 50px;

    & > h2,
    & > h3 {
      transition: 1s;
    }

    & > h2 {
      font-size: 50px;
      margin-bottom: 20px;
    }

    & > h3 {
      font-size: 25px;
    }

    & > menu {
      height: 500px;

      padding: 10px;
      margin: 50px 0 25px 0;

      overflow: auto;
      border: 1px solid var(--shadow-3);

      &::-webkit-scrollbar {
        display: none;
      }
    }

    & > div {
      & > button,
      & > input {
        margin: 10px;
      }

      & > input {
        width: 100%;
        max-width: 125px;
        height: 48px;

        border-radius: 4px;
        border: 1px solid var(--shadow-3);
        background-color: var(--color-white-2);

        padding: 0 8px;
      }
    }
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;

    & > main {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    & > main {
      & > h2 {
        font-size: 30px;
      }

      & > h3 {
        font-size: 15px;
      }
    }

    & > div {
      & > h1,
      & > h2 {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 425px) {
    & > main {
      & > div {
        & > button,
        & > input {
          max-width: unset;
          margin: 10px 0;
        }
      }
    }
  }
`;

export { Container };
