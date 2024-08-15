import React, { useContext, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    function reset() {
      setName("");
      setEmail("");
      setLastname("");
      setPassword("");
    }
    reset();
    e.preventDefault();
    async function register() {
      const res = await fetch("http://localhost:3000/signIn", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, lastname, email, password }),
      });
      const data = await res.json();
      console.log(data);
    }
    register();
    navigate("/success");
  }

  return (
    <div className="register">
      <Helmet>
        <title>Paw&Co/Register </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="registerContainer">
        <h1 className="registerHeading">Qeydiyyat</h1>

        <div class="wrapper">
          <form onSubmit={handleSubmit} action="">
            <p class="form-login">Şəxsi məlumatlar</p>
            <div class="input-box">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                required=" "
                placeholder="Ad"
                type="text"
              />
            </div>
            <div class="input-box">
              <input
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required=""
                placeholder="Soyad"
                type="text"
              />
            </div>
            <div class="input-box">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required=""
                placeholder="Email"
                type="text"
              />
            </div>
            <div class="input-box">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required=""
                placeholder="Şifrə"
                type="password"
              />
            </div>
            <div class="remember-forgot">
              <label>
                <input type="checkbox" />
                Mən İstifadəçi razılaşması və Məxfilik siyasəti-ni oxudum və
                razıyam
              </label>
            </div>
            <button class="btn">DAVAM ETMƏK</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
