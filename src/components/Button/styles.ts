import styled from "styled-components";

export const StyledButton = styled.div`
  .button {
    border-radius: 8px;
    font-weight: 500;
    background: #835afd;
    color: #fff;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
      margin-left: 0.5em;
    }

    &.outlined {
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
