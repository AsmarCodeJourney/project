import React, { useContext, useState } from "react";
import "./pleasure.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { TokenContext } from "../../context/TokenProvider";
import Swal from "sweetalert2";
function Pleasure() {
  const { token, setToken, setDecoded } = useContext(TokenContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function alert(success) {
    if (success) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your account has been verified",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    }
  }

  function error(message) {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: message,
      showConfirmButton: true,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    async function login() {
      const res = await fetch("http://localhost:3000/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 400) {
        // navigate("/")
        return error("Email kodunuz səhvdir");
      }
      if (res.status === 404) {
        return error("İstifadəçi tapılmadı!");
      }
      if (res.status === 403) {
        return error("Hesab təsdiqlənməyib! Email yoxlayın.");
      }
      const data = await res.json();

      Cookies.set("token", data.token);
      setToken(data.token);
      setDecoded(jwtDecode(data.token));
      console.log(data.token);
      alert(true);
    }
    login();
  }

  return (
    <div>
      <Helmet>
        <title>Paw&Co/Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="pleasureMain">
        <div className="pleasureContainer">
          <div className="pleasureLeft">
            <h2 className="pleasureLeftText">Yeni müştəri</h2>
            <p style={{ fontSize: "17px", fontWeight: "bolder" }}>
              Hesab qeydiyyatı
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "1px",
              }}
            >
              Şəxsi hesabınızı yaradaraq sürətli alış-veriş, öz sevimli
              dostunuzun şəklini paylaşmaq kimi funksiyalardan yararlanın.
            </p>
            <Link to={"/register"} className="pleasureLeftBtn">
              DAVAM ETMƏK
            </Link>
          </div>
          <div className="pleasureLeft">
            <h2 className="pleasureLeftText">Daxil ol</h2>
            <div className="pleasureEmail">
              <p style={{ fontSize: "13px", fontWeight: "bolder" }}>
                E-mail ünvanı
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="E-mail ünvanı"
                required
              />
            </div>
            <div className="pleasureEmail">
              <p style={{ fontSize: "13px", fontWeight: "bolder" }}>Şifrə</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Şifrə"
              />
            </div>
            <Link
              onClick={handleSubmit}
              type="submit"
              className="pleasureLeftBtn"
            >
              GİRİŞ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pleasure;
