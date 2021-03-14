import "./App.css";
import Footer from "./common/footer/Footer";

import Header from "./common/header/Header";
import QrContainer from "./components/qrcontainer/QrContainer";
import { QrContexProvider } from "./services/qrTypeContext";

function App() {
  return (
    <div className="App">
      <Header />
      <QrContexProvider>
        <QrContainer />
      </QrContexProvider>
      <Footer />
    </div>
  );
}

export default App;
