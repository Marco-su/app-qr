import { useState, createContext } from "react";

const QrContext = createContext();

export const QrContexProvider = ({ children }) => {
  const [qrType, setQrType] = useState("url");

  return (
    <QrContext.Provider value={{ qrType, setQrType }}>
      {children}
    </QrContext.Provider>
  );
};

export default QrContext;
