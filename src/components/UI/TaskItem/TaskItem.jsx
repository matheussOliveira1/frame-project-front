import styles from "./TaskItem.module.css";
import uncheckedBtnSvg from "../../../assets/radio_button_unchecked_121212.svg";
import checkedBtnSvg from "../../../assets/check_circle_121212.svg";
import deleteSvgFFFF from "../../../assets/delete_FFFFFF.svg";
import deleteSvg1212 from "../../../assets/delete_121212.svg";

function TaskItem(props) {
  return (
    <div className={styles.containerItem}>
      <img className={styles.iconTask} src={uncheckedBtnSvg} alt="" height={"64px"} width={"64px"}></img>
      <div className={styles.boxItem}>
        <div>{props.textoItem}</div>
        <img className={styles.imgDeleteBoard} src={deleteSvgFFFF} alt="" height={"35px"} width={"35px"}></img>
      </div>
    </div>
  );
}

export default TaskItem;
