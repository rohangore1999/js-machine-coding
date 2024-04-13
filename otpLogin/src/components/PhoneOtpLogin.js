import React, { useState } from "react";
import OTPInput from "./OTPInput";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOtpField, setShowOtpField] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    // phone Validation
    const regex = /[^0-9]/g;

    if (phoneNumber?.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");

      return;
    }

    // Show OTP screen
    setShowOtpField(true);
  };

  const onOTPSubmit = () => {
    console.log("Login Success!");
  };

  return (
    <div>
      {!true ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            placeholder="Enter Phone Number"
            onChange={handlePhoneNumber}
            value={phoneNumber}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP:</p>
          <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
