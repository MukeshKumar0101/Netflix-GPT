/** @format */

import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";

function LoginForm() {
  const [isSignInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const toggleSignInform = () => {
    setIsSingInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validation the form data
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = name.current?.value || "";
    const message = checkValidation( nameValue ,emailValue, passwordValue,);
    setErrorMessage(message);
    
   // Sign / sign up

  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative top-[200px] bg-black/70 max-w-[500px] mx-auto py-10 px-10">
        <h2 className="text-2xl font-bold text-white text-center pb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col">
          {!isSignInForm && (
            <input ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 px-2 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 px-2 rounded-md"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 px-2 rounded-md"
          />
          <p className="text-red-500 text-sm px-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="p-3 m-2 bg-[#E50914] hover:bg-[#8d1f25] transition-all text-white rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p
          onClick={toggleSignInform}
          className="font-bold text-white px-2 pt-2 cursor-pointer">
          {isSignInForm
            ? "New to Netflix ? Signup Up Now"
            : "Already registered ? Sign In Now.."}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
