import styled from "styled-components";

export const StyledRoomCode = styled.div`
  .room-code {
    height: 2.5em;
    border-radius: 0.5em;
    overflow: hidden;
    background: #fff;
    border: 1px solid #835afd;
    cursor: pointer;
    display: flex;
    align-items: center;

    div {
      height: 100%;
      background: #835afd;
      padding: 0 0.75em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      align-self: center;
      flex: 1;
      padding: 0 1.2em;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
