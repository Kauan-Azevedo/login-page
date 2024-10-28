import { FC } from "react";

interface InputFieldProps {
  labelFor: string;
  labelClass: string;
  label: string;
  placeholder: string;
  [key: string]: any;
}

const InputField: FC<InputFieldProps> = ({
  labelFor,
  labelClass,
  label,
  placeholder,
  ...props
}) => {
  return (
    <label htmlFor={labelFor} className={labelClass}>
      <span>{label}</span>
      <input placeholder={placeholder} {...props} />
    </label>
  );
};

export default InputField;
