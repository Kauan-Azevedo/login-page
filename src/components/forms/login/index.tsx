import { ChangeEvent, FC, FormEvent, useState } from "react";
import InputField from "../../InputField";
import Button from "../../Button";

import {
  signIn,
  signInGoogle,
  isAuthenticated,
} from "../../../api/auth/auth.service";
import { useNavigate } from "@tanstack/react-router";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
    await signIn(formValues.email, formValues.password)
      .then((response) => {
        console.log(response);
        navigate({ to: "/" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSubmit = async () => {
    try {
      const response = await signInGoogle();
      console.log(response);
      const authenticated = await isAuthenticated();
      if (authenticated) {
        navigate({ to: "/" });
      }
    } catch (error) {
      console.error("Error during Google sign in:", error);
    }
  };

  return (
    <form method="POST" className="login-form" onSubmit={handleSubmit}>
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
        value={formValues.email}
        onChange={handleChange}
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
        value={formValues.password}
        onChange={handleChange}
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
        <div className="button-group">
          <Button type="submit" text="Entrar na conta" className="login-btn" />
          <Button
            type="button"
            className="google-btn"
            onClick={() => {
              handleGoogleSubmit();
            }}
          >
            <img src="/google.svg" />
            <span>Ou faça login com o Google</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
