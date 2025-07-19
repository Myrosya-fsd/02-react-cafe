import css from "./Feedback.module.css";

import React from "react";

const Feedback = ({ good, bad, neutral, totalFeedback, positiveFeedback }) => {
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
