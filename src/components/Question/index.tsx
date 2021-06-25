import { ReactNode } from "react";
import cx from "classnames";

import { StyledQuestion } from "./styles";
// import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <StyledQuestion>
      <div
        className={cx(
          "question",
          { answered: isAnswered },
          { highlighted: isHighlighted && !isAnswered }
        )}
      >
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.avatar} />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div>
    </StyledQuestion>
  );
}
