// Styles
import style from "./menu.module.scss";

import { useRouter } from "next/router";

const Menu = (props) => {
  const router = useRouter();

  const menuItems = props.items;

  return (
    <nav className={style.menu}>
      {menuItems.map((res, index) => (
        <a
          key={index}
          className={
            res.path === router.pathname
              ? `${style.menuLink} ${style.menuLinkActive}`
              : style.menuLink
          }
          href={res.path}
        >
          {res.label}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
