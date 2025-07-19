import React, { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import "./App.css";

// Тип для об'єкта з фідбеком
type FeedbackState = {
  good: number;
  neutral: number;
  bad: number;
};

const App: React.FC = () => {
  // Завантаження стану з localStorage при ініціалізації
  const getInitialFeedback = (): FeedbackState => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState<FeedbackState>(getInitialFeedback);

  // Оновлення localStorage при зміні стану
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const onLeaveFeedback = (option: keyof FeedbackState): void => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const onReset = (): void => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback: number = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback: number =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        onLeaveFeedback={onLeaveFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
