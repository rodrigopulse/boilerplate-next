import "normalize.css";
import "../styles/main.scss";

// Components
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
