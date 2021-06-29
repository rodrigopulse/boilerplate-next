import "normalize.css";
import "../styles/main.scss";

// Components
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
