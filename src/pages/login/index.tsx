import LoginForm from "../../components/forms/login";

const LoginPage = () => {
  return (
    <div className="login-page">
      <section className="form-section">
        <div className="form-section__header">
          <h4>Bem-vindo de volta</h4>
          <h3>Faça login na sua conta</h3>
        </div>
        <LoginForm />
        <div className="register">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </div>
      </section>
      <section className="image-section">
        <img src="/background.svg" alt="people image" />
      </section>
    </div>
  );
};

export default LoginPage;
