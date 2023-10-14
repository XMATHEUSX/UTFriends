import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./signin.css";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {

    const userData = {
      username: email,
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

          document.getElementById("incrrectPasswordSI").style.display = "none";
          alert(data.message);

        } else if (!data.success) {

          document.getElementById("incrrectPasswordSI").style.display = "block";
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
                pattern="^[A-Za-z]+@alunos.utfpr.edu.br$"
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
          </div>
        </div>
        <div className="bottomContentSI">
          <p id="incrrectPasswordSI">Email ou Senha incorreta!</p>

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
