import { FC, ChangeEvent } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  labelFor: string;
  labelClass?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  value: string;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  label,
  labelFor,
  type,
  name,
  id,
  placeholder,
  required,
  minLength,
  value,
  autoComplete,
  onChange,
}) => {
  return (
    <div className={styles.inputFieldContainer}>
      <label htmlFor={labelFor} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.errorMessage}></span>
    </div>
  );
};

export default InputField;
