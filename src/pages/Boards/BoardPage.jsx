import styles from "./BoardPage.module.css";
import personSvg from "../../assets/person_121212.svg";
import addSvg from "../../assets/add_FFFFFF.svg";
import BoardItem from "../../components/UI/BoardItem/BoardItem";
import TaskItem from "../../components/UI/TaskItem/TaskItem";
import { useNavigate } from "react-router-dom";

function BoardPage () {

    // const [selectedBoard, setSelectedBoard] = useState("Faculdade");

    const navigate = useNavigate();

    const handleNavigate = (event) => {
        event.preventDefault();
        navigate("/profile");
    }

    return (
        <div className={styles.containerBoardPage}>
            <div className={styles.containerBoardItens}>
                <div className={styles.boxPerfil} onClick={handleNavigate}>
                    <img src={personSvg} alt="" height={"48px"} width={"48px"}/>
                    <div>Nome</div>
                </div>
                <div className={styles.boxBoardSelection}>
                    <BoardItem texto="Faculdade"/>
                    <BoardItem texto="Trabalho"/>
                    <BoardItem texto="Estudos"/>
                    <img className={styles.imgAddIcon} src={addSvg} alt="" height={"50px"} width={"50px"}></img>
                </div>
            </div>

            <div className={styles.containerBoardTasks}>
                <div className={styles.boardTaskName}>
                    <h1>Faculdade</h1>
                    <div className={styles.boxAddTask}>
                        <h2>Nova atividade</h2>
                        <img src={addSvg} alt="" height={"50px"} width={"50px"}></img>
                    </div>
                </div>

                <div className={styles.containerListsToDo}>
                    <div className={styles.boxToDoList}>
                        <div className={styles.titleList}>A fazer</div>
                        <TaskItem textoItem="Prova" />
                        <TaskItem textoItem="TCC" />
                    </div>

                    <div className={styles.boxToDoList}>
                        <div className={styles.titleList}>Concluido</div>
                        <TaskItem textoItem="Landing page" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;