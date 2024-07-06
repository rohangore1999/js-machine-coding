import React, { useState, useRef, useEffect } from "react";

const OTPInput = ({ length = 4, onOTPSubmit = () => {} }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  console.log({ otp });

  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  console.log({ inputRef });

  const handleChange = (e, idx) => {
    let value = e.target.value;

    if (isNaN(value)) return; // if not a number

    let newOtp = [...otp];
    newOtp[idx] = value.substring(value.length - 1); // taking only latest value/digit

    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === length) {
      onOTPSubmit(combinedOtp);
    }

    // Move cursor to next empty input field
    if (
      value &&
      idx < length - 1 &&
      inputRef.current[idx + 1] &&
      inputRef.current[newOtp.indexOf("")] // indexOf will return 1st empty field
    ) {
      inputRef.current[newOtp.indexOf("")].focus();
    }
  };

  const handleClick = (idx) => {
    // as input field is only 1, so when user clicks on one input field cursor should go to end
    inputRef.current[idx].setSelectionRange(1, 1); // it will directly move to end

    // if previous fields are empty then after click on particular input field it will move cursor to 1st empty field
    if (idx > 0 && !otp[idx - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (
      e.key === "Backspace" && // key press is backspace
      !otp[idx] && // otp of that index dont have value
      idx > 0 && // should not got out of bound
      inputRef.current[idx - 1] // ref is accessible
    ) {
      // Moving focus at backspace
      inputRef.current[idx - 1].focus();
    }
  };

  return (
    <div>
      {otp?.map((field, idx) => (
        <input
          ref={(input) => (inputRef.current[idx] = input)} // to get ref attach to all input fields
          key={idx}
          type="text"
          onChange={(e) => handleChange(e, idx)}
          value={field}
          onClick={() => handleClick(idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
