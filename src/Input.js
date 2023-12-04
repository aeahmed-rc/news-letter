import React, { useState } from "react";
import "./style.css";
import Button from "./Button";
import Success from "./Success";
import SubHeader from "./SubHeader";
import Failure from "./FailureInput";
const Input = () => {
  const [inputData, setInputData] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const emailAddress = e.target.value;
    setInputData(emailAddress);
    
  };

  const handleSubmit = (e) => {
    console.log('hr')
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData);
    console.log(isValid)
    setIsValidEmail(isValid);
    if (isValidEmail) {
      // Process the form data, e.g., send it to a server
      console.log("Valid email:", inputData);
      setIsSubmitted(true);
    } else {
      console.log(isSubmitted);
      setIsSubmitted(false);
    }
  };
  return (
    <div>
    {isSubmitted &&isValidEmail? (
        <div>
            <Success email={inputData}/>
            </div>
        
      ):(
    <form onSubmit={handleSubmit} >
    <header >
       <h1 className="header-container "> Stay Updated !</h1>
      </header >
    <SubHeader/>
      <label>
        Email address:
        <input
          type="email"
          value={inputData}
          onChange={handleChange}
          required
          className="input-field"
        /> 
      </label>
      
      <div>
    
      <Button type="submit" label="Subscribe to" buttonStyle={'submit-button'}/>
      </div>
      {!isValidEmail && <p style={{ color: "red" }}>Invalid email address</p>}
      {isSubmitted && (
        <p style={{ color: "Green" }}>Thank you for registering!</p>
      )}
     
    </form>
      )
        }
    </div>
  
  );
};
export default Input;
