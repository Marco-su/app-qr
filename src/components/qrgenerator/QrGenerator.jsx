import "./QrGenerator.css";
import QrCode from "qrcode";
import { useContext, useState } from "react";

import QrContext from "../../services/qrTypeContext";
import myQr from "../../assets/portfolio-qr.png";
import GeneratorInput from "./GeneratorInput";

const QrGenerator = () => {
  const [text, setText] = useState("");
  const [codeColor, setCodeColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const { qrType } = useContext(QrContext);

  let opts = {
    color: {
      dark: codeColor,
      light: backgroundColor,
    },
  };

  const generateQr = async (e) => {
    e.preventDefault();
    try {
      const response = await QrCode.toDataURL(text, opts);
      setImgUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="generator-container">
      <form onSubmit={generateQr}>
        {qrType === "url" ? (
          <>
            <label className="url-label">Your URL</label>
            <GeneratorInput
              type="url"
              placeholder="https://example.com"
              setText={setText}
            />
          </>
        ) : (
          <GeneratorInput
            type="text"
            placeholder="Your Text"
            setText={setText}
          />
        )}

        <div className="color-content mb-3">
          <div className="input-color-container mb-2">
            <label>Code color</label>
            <input
              type="color"
              onChange={(e) => setCodeColor(e.target.value)}
            />
          </div>
          <div className="input-color-container mb-2">
            <label>Background color</label>
            <input
              type="color"
              value="#ffffff"
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
          <span className="text-danger small">select contrasting colors</span>
        </div>

        <button className="btn btn-success">Generate QR</button>
      </form>

      <figure>
        <img src={imgUrl ? imgUrl : myQr} alt="QR-Code" />
        <button className={`btn btn-success ${imgUrl ? "" : "disabled"}`}>
          <a href={imgUrl} rel="noreferer" download>
            Download QR
          </a>
        </button>
      </figure>
    </div>
  );
};

export default QrGenerator;
