import React from "react";

export default function FormContainer({ children }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center px-3 ">
        <div className="col-xs-12 col-md-6 shadow max-width-50">{children}</div>
      </div>
    </div>
  );
}
