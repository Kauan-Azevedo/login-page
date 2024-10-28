import { Children, FC } from "react";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const Button: FC<ButtonProps> = ({ text, children, ...props }) => {
  return <button {...props}>{children ? children : text}</button>;
};

export default Button;
