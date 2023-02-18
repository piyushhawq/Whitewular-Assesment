import React, { useState } from 'react';
import QRCode from 'qrcode.react';
export default function QRCodeGenerator() {
  const [alphanumericCode, setAlphanumericCode] = useState('');
  const [isValidated, setIsValidated] = useState(false);

  const handleInputChange = (event) => {
    setAlphanumericCode(event.target.value);
  };

  const handleScan = (data) => {
    if (data === alphanumericCode) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  };

  return (
    <div>
      <label>
        Alphanumeric code:
        <input type="text" value={alphanumericCode} onChange={handleInputChange} />
      </label>
      <QRCode value={alphanumericCode} onScan={handleScan} />
      {isValidated && <p>Code validated!</p>}
    </div>
  );
}
