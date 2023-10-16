import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./signin.css";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function Login() { navigate('/feed') }

  const handleLogin = () => {

    const userData = {
      email: email,
      password: senha,
    };

    fetch("http://localhost:3000/api/v1/profile/login", {

      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(userData),

    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);

        if (data.success) {

          document.getElementById("incorrectPasswordSI").style.display = "none";
          localStorage.setItem('token', data.token);
          Login();

        } else if (!data.success) {

          document.getElementById("incorrectPasswordSI").style.display = "block";
          document.getElementById("Email").value = "";
          document.getElementById("Senha").value = "";
        }
      })
      .catch((error) => {console.error("Erro:", error);});
  };


  return (
    <div className="conteinerSI">
      <div className="signinBoxSI">
        <div className="signinContentSI">
          <div className="contentSI">
            <p> Insira seu email institucional </p>

            <div className="emailBoxSI">
              <input
                id="Email"
                title="E-mail"
                name="E-mail"
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="contentSI">
            <p> Informe sua senha </p>

            <div className="passwordBoxSI">
              <input
                id="Senha"
                title="Senha"
                name="Senha"
                type="password"
                autoComplete="off"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <p className="incorrectSI" id="incorrectPasswordSI"> Email ou Senha incorreta! </p>

          </div>
        </div>
        <div className="bottomContentSI">

          <FiArrowRight
            title="arrow"
            className="arrowIconSI"
            size={45}
            onClick={handleLogin}
          />
        </div>
      </div>

      <div className="titleBoxSI">
        <div className="titleBarSI" id="signin">
          <p> Welcome_User </p>

          <Link to="/">
            <AiFillCloseSquare
              title="close"
              className="closeIconSI"
              size={24}
            />
          </Link>
        </div>

        <div className="titleContentSI">
          <h1> Loading... </h1>

          <div className="titleProgressBarSI">
            <div className="progressBarSI" />
          </div>
        </div>
      </div>
    </div>
  );
}