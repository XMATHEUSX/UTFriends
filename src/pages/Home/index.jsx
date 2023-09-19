import { useState } from 'react'
import UTFriends from '/src/assets/images/UTFriends.png'
import './home.css'

import { Link } from 'react-router-dom'

export default function Home() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="conteinerHome">
       
      <div className="logoBoxHome">

        <img className="logoHome" src={UTFriends} alt="Descricao da Imagem"></img>

      </div>

      <div className="boxHome">

        <div className ="titleBoxHome">

          <h1 className="titleHome"> Bem-Vindo </h1>

          <span className="subtitleHome"> Realize seu login para continuar </span>

        </div>

        <div className="signinBoxHome">
          
          <span className="textHome"> Insira seu e-mail institucional </span>

          <div className="contentBoxHome">
          
            <input
              title="Email"
              name="Email"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <span className="textHome"> Insira sua senha </span>

          <div className="contentBoxHome">
            
            <input
              title="Senha"
              name="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <button type="button">

            <p className="signinHome"> ENTRAR </p>

          </button>
          
        </div>

        <div className="lastBoxHome">
          
{/*          <Link to "">*/}

            <h3 className="lastHome"> Esqueceu sua senha? </h3>

{/*          </Link>*/}

          <Link className="linkHome" to="/signup">

            <h3 className="lastHome">Criar conta </h3>
           
          </Link>

        </div>
      </div>
    </div>
  );
}