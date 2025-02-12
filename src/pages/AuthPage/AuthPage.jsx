import InputAuth from "../../components/UI/InputAuth/InputAuth";
import Button from "../../components/UI/Button/Button";
import styles from "./AuthPage.module.css";
import { useNavigate } from "react-router-dom";


function AuthPage() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/boards");
    }

    return (
        <div className={styles.containerAuthPage}>
            <div className={styles.boxLogin}>
                <h1>Login</h1>
                <form className={`${styles.formAuth} form-login`} /*method="GET"*/ onSubmit={handleSubmit}>
                    <InputAuth title="E-mail" type="email" placeHolder="Digite seu e-mail" />
                    <InputAuth title="Senha" type="password" placeHolder="Digite sua senha" />
                    <Button typeBtn="submit" text="Entrar"/>
                </form>
            </div>
            <div className={styles.line}></div>
            <div className={styles.boxCadastro}>
                <h1>Cadastro</h1>
                <form className={`${styles.formAuth} form-cadastro`} /*method="POST"*/ onSubmit={handleSubmit}>
                    <div className={styles.boxInptCadastro}>
                        <InputAuth title="Nome" type="text" placeHolder="Digite seu nome" />
                        <InputAuth title="Sobrenome" type="text" placeHolder="Digite seu sobrenome" />
                    </div>
                    <InputAuth title="E-mail" type="email" placeHolder="Digite seu e-mail" isInptEmail="TRUE"/>
                    <div className={styles.boxInptCadastro}>
                        <InputAuth title="Senha" type="password" placeHolder="Digite sua senha" />
                        <InputAuth title="Confirme sua senha" type="password" placeHolder="Confirme sua senha" />
                    </div>
                    <Button typeBtn="submit" text="Cadastrar"/>
                </form>
            </div>
        </div>
    );
}

export default AuthPage;