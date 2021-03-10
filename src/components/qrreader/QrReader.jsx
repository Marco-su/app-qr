import "./QrReader.css";
import { useRef, useState } from "react";
import Reader from "react-qr-reader";

const QrReader = () => {
  const qrRef = useRef(null);
  const [scanResult, setScanResult] = useState("");
  const [decodedQr, setDecodedQr] = useState(false);

  const handleErrorFile = (error) => {
    console.log(error);
  };

  const handleScanFile = (result) => {
    if (result) {
      setScanResult(result);
      setDecodedQr(true);
    }
  };

  const selectFile = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <div id="qr-reader">
      <button className="btn btn-success" onClick={selectFile}>
        Scan QR
      </button>
      <div className="qr-image">
        <Reader
          ref={qrRef}
          delay={300}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        ></Reader>
      </div>
      {decodedQr ? (
        <>
          <h4>Your code:</h4>
          <input className="form-control" type="text" value={scanResult} />{" "}
        </>
      ) : null}
    </div>
  );
};

export default QrReader;
