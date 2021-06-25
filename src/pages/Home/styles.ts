import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;
      background: #835afd;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16em 5em;

      img {
        max-width: 320px;
      }

      strong {
        font: 700 36px "Poppins", sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }

      p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 1em;
        color: #f8f8f8;
      }
    }

    main {
      flex: 8;
      padding: 0 2em;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 20em;
      align-items: stretch;
      text-align: center;

      > img {
        align-self: center;
      }

      h2 {
        font-size: 24px;
        margin: 4em 0 1.5em;
        font-family: "Poppins", sans-serif;
      }

      form {
        input {
          border-radius: 0.5em;
          padding: 1em;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          margin-top: 1em;
        }

        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: #737380;
        margin-top: 1em;

        a {
          color: #e559f9;
        }
      }
    }

    .create-room {
      margin-top: 4em;
      padding: 1em;
      /* height: 50px; */
      border-radius: 0.5em;
      font-weight: 500;
      background: #ea4335;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 0;
      transition: filter 0.2s;

      img {
        margin-right: 0.5em;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 14px;
      color: #a8a8b3;
      margin: 2em 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-right: 1em;
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-left: 1em;
      }
    }
`;
