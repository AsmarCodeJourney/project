import React from "react";
import "../pages/register/register.scss";
import { Helmet } from "react-helmet-async";
function Success() {
  return (
    <div className="success">
      <Helmet>
        <title>Paw&Co/Success </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>SİZ QEYDİYYATDAN UĞURLA KEÇDİNİZ!</h1>
    </div>
  );
}

export default Success;
