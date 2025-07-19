import React from "react";
import css from "./Feedback.module.css";

// Типи пропсів
type FeedbackProps = {
  good: number;
  neutral: number;
  bad: number;
  totalFeedback: number;
  positiveFeedback: number;
};

const Feedback: React.FC<FeedbackProps> = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <ul className={css.feedback}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
