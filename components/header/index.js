import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const menuItems = [
    {
      label: "Sobre",
      path: "/sobre",
    },
  ];
  return (
    <nav className="menu">
      {menuItems.map((res, index) => (
        <a
          key={index}
          className={
            res.path === router.pathname
              ? "menu__link menu__link--active"
              : "menu__link"
          }
          href={res.path}
        >
          {res.label}
        </a>
      ))}
      {console.log("slug: ", router)}
    </nav>
  );
};

export default Header;
