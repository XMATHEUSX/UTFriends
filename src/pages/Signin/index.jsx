import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import UsefulBox from "../../components/UsefulBox";

import "./signin.css";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [displayNV, setDisplayNV] = useState(false);
  const [displayNR, setDisplayNR] = useState(false);

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

      fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/login", {

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

          alert(data.message);

          if (data.message == 'Credenciais inválidas.') { setDisplayNR(true) }
          else if (data.message == 'Email não verificado.') { setDisplayNV(true) }

          //document.getElementById("Email").value = "";
          //document.getElementById("Senha").value = "";
          //setSenha("");
          //setEmail("");
        }
      })
      .catch((error) => {console.error("Erro:", error);})
    }
  };

  const enterCapture = (e) => { if (e.key === 'Enter') { handleLogin() } }

  function CloseIcon() { setDisplayNV(false); setDisplayNR(false) }

  function OpenCreateAccount() { navigate('/signup') }

  function NotValidated() {
    
    return ( 

      <UsefulBox 
        display={displayNV}
        name={'Validation_Failed'} 
        title={'ERROR'}
        button={'Tentar Novamente'}
        message={'Seu email não está verificado, um novo link de verificação foi encaminhado para seu e-mail'}
        width={'25%'}
        height={'20%'} 
        onClickClose={CloseIcon} 
        onClickButton={CloseIcon}
      /> 
    ) 
  }

  function NotRegistered() {

    return( 
    
      <UsefulBox 
        display={displayNR} 
        name={'Login_Failed'}
        title={'ERROR'}
        button={'Criar Conta'}
        message={'Conta UTFriends inexiste, crie sua conta para continuar com o login'}
        width={'25%'}
        height={'20%'} 
        onClickClose={CloseIcon} 
        onClickButton={OpenCreateAccount}
      /> 
    ) 
  }

  /* Exibição da tela de SignIn */

  return (
    <div className="conteinerSI">

      {NotRegistered()}

      {NotValidated()}

      <div className="signinBoxSI">
        <div className="signinContentSI">
          <div className="contentSI">
            <p> Insira seu email institucional </p>

            <div className="emailBoxSI">
              <input
                id="Emails"
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
                id="Senha"
                title="Senha"
                name="Senha"
                type="password"
                maxLength={15}
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