import "normalize.css";
import "../styles/main.scss";

import axios from "axios";

// Components
import Header from "../components/header";

const MyApp = ({ Component, pageProps, props }) => {
  return (
    <div className="wrapper">
      <Header menu={props.menu} />
      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async () => {
  const menu = await axios(`${process.env.API}/api/menu`);
  return { props: { menu: menu.data } };
};

export default MyApp;
