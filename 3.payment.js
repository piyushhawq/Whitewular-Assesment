import React, { useState } from "react";

export default function PaymentForm() {
  const [cashAmount, setCashAmount] = useState(40);
  const [cardAmount, setCardAmount] = useState(60);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cashAmount + cardAmount !== 100) {
      alert(
        "The sum of the cash and card amounts should equal the bill amount which is 100 rupees"
      );
    } else {
      // <h1>success</h1>;
      console.log("payment successfull");
      alert(
        "Payment Successfull"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cash Amount:
        <input
          type="number"
          value={cashAmount}
          onChange={(event) => setCashAmount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Card/Online Amount:
        <input
          type="number"
          value={cardAmount}
          onChange={(event) => setCardAmount(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Payment</button>
    </form>
  );
}
