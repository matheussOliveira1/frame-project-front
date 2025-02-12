import styles from "./InputAuth.module.css";

function InputAuth(props) {
  let className = styles.inputAuth;

  if (props.isInptEmail == "TRUE") {
    className = styles.inputEmail;
  }

  return (
    <div className={styles.boxInpts}>
      <span>{props.title}</span>
      <input
        type={props.type}
        className={className}
        placeholder={props.placeHolder}
        required
      ></input>
    </div>
  );
}

export default InputAuth;
