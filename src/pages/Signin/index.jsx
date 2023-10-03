import { AiFillCloseSquare } from 'react-icons/ai'
import GoogleFonts from 'react-google-fonts'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './signin.css'

export default function Signin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    const userData = {
      username: email,
      password: senha,
    };
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
      alert(userData.username);
  };
  
  return (
    <div className="conteinerSI">

      <GoogleFonts family="Roboto Mono" variant="regular"/>

      <div className="signinBoxSI">

        <div className="signinContentSI">
      
          <div className="contentSI">
          
            <p> Insira seu email institucional </p>

            <div className="emailBoxSI">

              <input
                title="E-mail"
                name="E-mail"
                type="email"
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
                required pattern="^[A-Za-z]+@alunos.utfpr.edu.br$"
              />
              
            </div>
          </div>

          <div className="contentSI">
          
            <p> Informe sua senha </p>

            <div className="passwordBoxSI">

              <input
                title="Senha"
                name="Senha"
                type="password"
                autoComplete="off"
                onChange={e => setSenha(e.target.value)}
              />

            </div>
          </div>
        </div>

        <div className="bottomContentSI">

          <FiArrowRight title="arrow" className="arrowIconSI" size={45} onClick={handleLogin}/>

        </div>
      </div>

      <div className="titleBoxSI">

        <div className="titleBarSI" id="signin">
          
          <p> Welcome_User </p>

          <Link to="/">

            <AiFillCloseSquare title="close" className="closeIconSI" size={24} />

          </Link>
            
        </div>

        <div className="titleContentSI">
          
          <h1> Loading... </h1>

          <div className="titleProgressBarSI">
          
            <div className="progressBarSI"/>

          </div>
        </div>
      </div>
    </div>
  );
}