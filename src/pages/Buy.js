import React, { useState, useEffect } from "react";
import { Pi } from "@pinetwork-js/sdk"; 
import "./BuyPage.css";

const BuyPage = () => {
  const [pdfs, setPdfs] = useState([
    { id: 1, name: "Sample PDF 1", file: "20230719_075833_11zon.pdf", price: 1 },
    { id: 2, name: "Sample PDF 2", file: "sample2.pdf", price: 2 },
  ]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    if (typeof Pi !== "undefined" && Pi.init) {
      Pi.init({ version: "2.0" });
    } else {
      console.error("PiApp is not defined. Ensure @pinetwork-js/sdk is installed.");
    }
  }, []);

  const handleBuy = async (pdf) => {
    setLoadingId(pdf.id);
    try {
      if (!Pi || !Pi.openPayment) {
        console.error("PiApp is undefined or missing openPayment method.");
        return;
      }

      const payment = await Pi.openPayment({
        amount: pdf.price,
        memo: `Buying ${pdf.name}`,
        metadata: { file: pdf.file },
        onReadyForServerApproval: (paymentId) => console.log("Payment Ready:", paymentId),
        onReadyForServerCompletion: (paymentId) => {
          console.log("Payment Completed:", paymentId);
          window.location.href = `/pdfs/${pdf.file}`;
        },
      });

      console.log("Payment Result:", payment);
    } catch (error) {
      console.error("Payment Error:", error);
    }
    setLoadingId(null);
  };

  return (
    <div className="buy-page">
      <h1>Buy PDFs</h1>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.id}>
            <span>{pdf.name} - {pdf.price} TestPi</span>
            <button onClick={() => handleBuy(pdf)} disabled={loadingId === pdf.id}>
              {loadingId === pdf.id ? "Processing..." : "Buy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyPage;
