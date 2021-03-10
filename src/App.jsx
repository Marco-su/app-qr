import "./App.css";

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
    </div>
  );
}

export default App;
