import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
// import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <StyledButton>
      <button
        className={`button ${isOutlined ? "outlined" : ""}`}
        {...props}
      ></button>
    </StyledButton>
  );
}
