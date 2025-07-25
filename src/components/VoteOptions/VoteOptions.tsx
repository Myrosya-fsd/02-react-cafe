import React from "react";
import css from "./VoteOptions.module.css";
import { FeedbackOption } from "../../types/votes";

// Типи можливих значень фідбеку
//type FeedbackOption = "good" | "neutral" | "bad";

// Типи пропсів
type OptionsProps = {
  onLeaveFeedback: (option: FeedbackOption) => void;
  onReset: () => void;
  totalFeedback: number;
};

const Options: React.FC<OptionsProps> = ({
  onLeaveFeedback,
  onReset,
  totalFeedback,
}) => {
  return (
    <div>
      <ul className={css.options}>
        <li>
          <button
            className={css.button}
            onClick={() => onLeaveFeedback("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.button}
            onClick={() => onLeaveFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => onLeaveFeedback("bad")}>
            Bad
          </button>
        </li>
        <li>
          {totalFeedback > 0 && (
            <button className={`${css.button} ${css.reset}`} onClick={onReset}>
              Reset
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Options;
