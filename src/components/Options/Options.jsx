import css from "./Options.module.css";

function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div>
      <ul className={css.options}>
        <li>
          <button className={css.btn} onClick={() => onLeaveFeedback("good")}>
            Good
          </button>
        </li>
        <li>
          <button
            className={css.btn}
            onClick={() => onLeaveFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => onLeaveFeedback("bad")}>
            Bad
          </button>
        </li>
        <li>
          {totalFeedback > 0 && (
            <button className={css.btn} onClick={onReset}>
              Reset
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Options;
