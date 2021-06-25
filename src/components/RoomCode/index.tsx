import copyImg from "../../assets/images/copy.svg";

import { StyledRoomCode } from "./styles";
// import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodetoClipBoard() {
    navigator.clipboard.writeText(props.code);
  }
  return (
    <StyledRoomCode>
      <button className="room-code" onClick={copyRoomCodetoClipBoard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </StyledRoomCode>
  );
}
