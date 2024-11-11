import { useState } from "react";
import LoginForm from "../../components/forms/Login";
import RegisterForm from "../../components/forms/Register";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <section className="form-section">
        <div className="form-section__header">
          {isLogin ? (
            <>
              <h4>Bem-vindo de volta</h4>
              <h3>Faça login na sua conta</h3>
            </>
          ) : (
            <>
              <h4>Crie uma conta</h4>
              <h3>Registre-se para começar</h3>
            </>
          )}
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="register">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
          <a
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Registre-se" : "Faça login"}
          </a>
        </div>
      </section>
      <section className="image-section">
        <img src="/background.svg" alt="people image" />
      </section>
    </div>
  );
};

export default LoginPage;
