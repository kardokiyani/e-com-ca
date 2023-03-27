import React from "react";

export function CheckoutSuccess() {
  return (
    <>
      <h1 className="successH1">Your order was successful!</h1>
      <div className="backHomeContainer">
        <a href="/" className="backHomeLink">
          <button className="backHomeButton">Back to home</button>
        </a>
      </div>
    </>
  );
}
