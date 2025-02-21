import Button from "../../components/UI/Button/Button";
import SpanLocked from "../../components/UI/SpanLocked/SpanLocked";
import styles from "./Perfil.module.css";

function Perfil () {

    let configBtn = {
        width: "70%",
        heigth: "56px",
        backgroundColor: "#FF0000"
    }

    return (
        <div className={styles.containerProfile}>
            <div className={styles.boxProfile}>
                <h1>Dados do Perfil</h1>
                <div className={styles.boxUserName}>
                    <SpanLocked spanTitle="Nome" spanValue="Matheus" />
                    <SpanLocked spanTitle="Sobrenome" spanValue="Oliveira" />
                </div>
                <div className={styles.boxEmail}>
                    <SpanLocked spanTitle="Email" spanValue="matheus@frame.com" />
                </div>
                <div className={styles.boxButton}>
                    <Button typeBtn="" text="Atualizar E-mail" />
                    <Button typeBtn="" text="Alterar senha" />
                </div>
                <Button configs={configBtn} typeBtn="" text="Excluir conta" />
            </div>
        </div>
    );
}

export default Perfil;