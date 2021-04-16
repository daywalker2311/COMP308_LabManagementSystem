import React from "react";
import { isUserAuthenticated } from "../../Helper";
import { Redirect } from "react-router-dom";
import "../../App.css";

function Emergency() {
  return (
    <>
      {isUserAuthenticated() ? (
        <div className="App">Emergency route for patient goes here</div>
      ) : (
        <Redirect to="/patient" />
      )}
    </>
  );
}

export default Emergency;
