import { ChangeEvent, FC, FormEvent, useState } from "react";
import InputField from "../../InputField";
import Button from "../../Button";
import { signUp } from "../../../api/auth/auth.service";
import { useNavigate } from "@tanstack/react-router";
import styles from "./RegisterForm.module.css"; // Importando o CSS modular do RegisterForm

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: FC = () => {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log(formValues);
    await signUp(formValues.email, formValues.password)
      .then((response) => {
        console.log(response);
        navigate({ to: "/" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form method="POST" className={styles.registerForm} onSubmit={handleSubmit}>
      <InputField
        label="Email"
        labelFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        required
        autoComplete="off"
        value={formValues.email}
        onChange={handleChange}
      />
      <InputField
        label="Senha"
        labelFor="password"
        type="password"
        name="password"
        id="password"
        placeholder="123456789"
        minLength={6}
        required
        value={formValues.password}
        onChange={handleChange}
      />
      <InputField
        label="Confirme a Senha"
        labelFor="confirmPassword"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="123456789"
        minLength={6}
        required
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      <div className={styles.footer}>
        <div className={styles.buttonGroup}>
          <Button
            type="submit"
            text="Registrar"
            className={styles.registerBtn}
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
