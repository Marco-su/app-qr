import "./QrContainer.css";
import { useContext } from "react";

import QrContext from "../../services/qrTypeContext";
import QrGenerator from "../qrgenerator/QrGenerator";
import QrReader from "../qrreader/QrReader";

const QrContainer = () => {
  const { qrType, setQrType } = useContext(QrContext);

  return (
    <main>
      <header>
        <div className="qr-type-container">
          <button
            className={`${qrType === "url" ? "active" : ""} qr-type-button`}
            onClick={() => setQrType("url")}
          >
            URL
          </button>
        </div>
        <div className="qr-type-container">
          <button
            className={`${qrType === "url" ? "" : "active"} qr-type-button`}
            onClick={() => setQrType("text")}
          >
            Text
          </button>
        </div>
      </header>

      <div className="qr-area">
        <QrGenerator />
        <QrReader />
      </div>
    </main>
  );
};

export default QrContainer;
