import s from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={s.navbar}>
      <div className={s.logo_wrapper}>
        <img className={s.logo} src="/logo.svg" alt="logo" />
      </div>
      <div className={s.navbar_items}>
        <a className={s.navbar_item} href="/">
          Home
        </a>
        <a className={s.navbar_item} href="/login">
          Login
        </a>
        <a className={s.navbar_item} href="/register">
          Register
        </a>
        <a className={s.navbar_item} href="/profile">
          Perfil
        </a>
      </div>
    </div>
  );
};

export default Navbar;
