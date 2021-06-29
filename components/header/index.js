// Styles
import styles from "./header.module.scss";

// Components
import Menu from "../menu";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Menu items={props.menu} />
    </header>
  );
};

export default Header;
