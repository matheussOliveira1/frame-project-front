import styles from "./Button.module.css";

function Button (props) {
    return (
        <>
            <button type={props.typeBtn} className={styles.btnSubmit}>{props.text}</button>
        </>
    )
}

export default Button;