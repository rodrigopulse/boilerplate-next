// Styles
import styles from "./header.module.scss";

// Components
import Menu from "../menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
};

export default Header;
