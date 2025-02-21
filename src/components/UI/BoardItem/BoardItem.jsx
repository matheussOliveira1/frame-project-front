import styles from "./BoardItem.module.css";
import deleteSvgFFFF from "../../../assets/delete_FFFFFF.svg";
import deleteSvg1212 from "../../../assets/delete_121212.svg";

function BoardItem(props) {
  return (
    <div className={styles.boxBoardItem}>
      <div className={styles.boardName}>{props.texto}</div>
      <img className={styles.imgDeleteBoard} src={deleteSvgFFFF} alt="" height={"35px"} width={"35px"}/>
    </div>
  );
}

export default BoardItem;
