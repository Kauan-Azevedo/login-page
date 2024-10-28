import InputField from "../../components/InputField";
import Button from "../../components/Button";

const LoginPage = () => {
  return (
    <div className="login-page">
      <section className="form-section">
        <div className="form-section__header">
          <h4>Bem-vindo de volta</h4>
          <h3>Faça login na sua conta</h3>
        </div>
        <form method="POST" className="login-form">
          <InputField
            label="Email"
            labelFor="email"
            labelClass="email-field"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
            required
            autoComplete="off"
          />
          <InputField
            label="Senha"
            labelFor="password"
            labelClass="password-field"
            placeholder="123456789"
            type="password"
            name="password"
            id="password"
            minLength={6}
            required
          />
          <div className="login-form__footer">
            <div className="remember-me">
              <label htmlFor="remember">
                <input type="checkbox" name="remember" id="remember" />
                <span>Lembre de mim</span>
              </label>
            </div>
            <div className="forgot-password">
              <a href="#">Esqueceu sua senha?</a>
            </div>
          </div>
        </form>
        <div className="button-group">
          <Button type="submit" text="Entrar na conta" className="login-btn" />
          <Button className="google-btn">
            <img src="/google.svg" />
            <span>Ou faça login com o Google</span>
          </Button>
        </div>
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
