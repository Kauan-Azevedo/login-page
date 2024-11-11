import { FC } from "react";
import styles from "./content.module.css";

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
