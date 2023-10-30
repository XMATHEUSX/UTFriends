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

  /* Clique para fazer o login */

  const handleLogin = () => {

    const userData = {
      email: email,
      password: senha,
    };

    const userVal = {

      email: false,
      password: false
    }

    /* Verificação das entradas de dados */

    document.getElementById("noEmailSI").style.display = 'block'

    if (email != '') {

      document.getElementById("noEmailSI").style.display = 'none'
      userVal.email = true

    } else { 
      
      document.getElementById("noEmailSI").style.display = 'block' 
      document.getElementById("incorrectPasswordSI").style.display = "none";
    
    }

    if (senha != '') {

      document.getElementById("noSenhaSI").style.display = 'none'
      userVal.password = true

    } else { 
      
      document.getElementById("noSenhaSI").style.display = 'block' 
      document.getElementById("incorrectPasswordSI").style.display = "none";
    
    }

    /* Envio dos dados validados para o banco de dados */

    const validacao = Object.values(userVal).every(value => value === true);

    if(validacao){

      document.getElementById("noEmailSI").style.display = 'none'
      document.getElementById("noSenhaSI").style.display = 'none'

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
          setSenha("");
          setEmail("")
        }
      })
      .catch((error) => {console.error("Erro:", error);});
    }
  };

  const enterCapture = (e) => { if (e.key === 'Enter') { handleLogin() } }

  /* Exibição da tela de SignIn */

  return (
    <div className="conteinerSI">
      <div className="signinBoxSI">
        <div className="signinContentSI">
          <div className="contentSI">
            <p> Insira seu email institucional </p>

            <div className="emailBoxSI">
              <input
                title="E-mail"
                name="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={enterCapture}
              />
            </div>

            <p className="incorrectSI" id="noEmailSI" style={{fontSize: '12px'}}> Campo obrigatório </p>

          </div>

          <div className="contentSI">
            <p> Informe sua senha </p>

            <div className="passwordBoxSI">
              <input
                title="Senha"
                name="Senha"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                onKeyDown={enterCapture}
              />
            </div>

            <p className="incorrectSI" id="incorrectPasswordSI" style={{fontSize: '12px'}}> Email ou Senha incorreta! </p>

            <p className="incorrectSI" id="noSenhaSI" style={{fontSize: '12px'}}> Campo obrigatório </p>

          </div>
        </div>
        <div className="bottomContentSI">

          <Link to={'/emailvalidation'} className="buttonLinkSI">

            <button className="buttonSI">Trocar Senha</button>

          </Link>

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