import React from "react";
import css from "./CafeInfo.module.css";

const VoteOptions: React.FC = () => {
  return (
    <div className={css.container}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default VoteOptions;
