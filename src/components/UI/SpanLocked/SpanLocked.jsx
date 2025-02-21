import styles from "./SpanLocked.module.css";

function SpanLocked(props) {
  return (
    <div className={styles.boxName}>
      {props.spanTitle}
      <span className={styles.spnUserName}>{props.spanValue}</span>
    </div>
  );
}

export default SpanLocked;
