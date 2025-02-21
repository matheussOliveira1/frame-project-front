import { useEffect, useState } from "react";
import styles from "./Button.module.css";

function Button(props) {

  let configBtn = props.configs;
  const [widthBtn, setWidthBtn] = useState();
  const [heightBtn, setHeightBtn] = useState();
  const [btnBkColor, setBtnBkColor] = useState(); 

  useEffect(() => {
    setWidthBtn(configBtn.width);
    setHeightBtn(configBtn.heigth);
    setBtnBkColor(configBtn.backgroundColor);
  });

  if (props.configs != "") {
    return (
      <>
        <button
          type={props.typeBtn}
          className={styles.btnSubmit}
          style={{ 
            width: widthBtn, 
            height:  heightBtn, 
            backgroundColor: btnBkColor}}>
          {props.text}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type={props.typeBtn} className={styles.btnSubmit}>
          {props.text}
        </button>
      </>
    );
  }
}

export default Button;
