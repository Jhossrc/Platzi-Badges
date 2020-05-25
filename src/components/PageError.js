import React from "react";

import './style/PageError.css';

function PageError(props) {
  return (
    <div className="PageError">
      <h3>Error {props.error.message}</h3>
    </div>
  );
}

export default PageError;
