import styled from "styled-components";

export const StyledQuestion = styled.div`
  .question {
    background: #fefefe;
    border-radius: 0.5em;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 1.5em;

    & + .question {
      margin-top: 0.5em;
    }

    &.highlighted {
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer .user-info span {
        color: #29292e;
      }
    }

    &.answered {
      background: #dbdcdd;
    }

    p {
      color: #29292e;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5em;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 2em;
          height: 2em;
          border-radius: 500%;
        }

        > span {
          margin-left: 0.5em;
          color: #737380;
          font-weight: 500;
          font-size: 14px;
        }
      }

      > div {
        display: flex;
        gap: 1em;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: #737380;
          gap: 0.5em;

          &.liked {
            color: #835afd;

            svg path {
              stroke: #835afd;
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;
