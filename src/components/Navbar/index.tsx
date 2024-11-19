import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_wrapper}>
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="imagine um logo aqui"
        />
      </div>
      <div className={styles.navbar_items}>
        <a className={styles.navbar_item} href="/">
          Home
        </a>
        <a className={styles.navbar_item} href="/auth">
          Login
        </a>
        {/* <a className={styles.navbar_item} href="/profile">
          Perfil
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
