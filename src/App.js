import "./App.css";
import "./styles/vendor/bootstrap.min.css";
import "./styles/vendor/magnific-popup.css";
import "./styles/vendor/owl.carousel.min.css";
import "./styles/vendor/owl.theme.default.min.css";
import "./styles/cynic-responsive.css";
import "./styles/cynic.css";
import "./styles/fontawesome-all.min.css";
import "./styles/miniline.css";
import "./styles/process.css";

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
