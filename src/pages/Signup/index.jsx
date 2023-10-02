import { useState } from 'react'
import './signup.css'

import { Link } from 'react-router-dom'

export default function SignUp() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repsenha, setRepsenha] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [apelido, setApelido] = useState('')

  const handleRegister = () => {
    const userData = {
      name: nome,
      surname: sobrenome,
      email: email,
      password: senha,
      nickname: apelido,

    };
    fetch('http://localhost:3000/register', {
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
      alert(userData.nickname);
  };
  return (

    <div className="conteiner">
    
      <div className="box">
      
        <div className="titleBox">
        
          <h1> Criar Conta </h1>
          <span> Preencha os campos para criar sua conta UTFriends </span>

        </div>

        <div className="fieldBox">
        
          <div className="contentBox">

            <div className="nameBox">
            
              <p className="text"> Primeiro nome </p>

              <div className="name">

                <input
                  title="Nome"
                  name="Nome"
                  type="text"
                  value={nome}
                  placeholder="Ex: Joao"
                  onChange={(e) => setNome(e.target.value)}
                />

              </div>

            </div>

            <div className="nameBox">
          
              <p className="text"> Sobrenome </p>

              <div className="name">

                <input
                  title="Sobrenome"
                  name="Sobrenome"
                  type="text"
                  value={sobrenome}
                  placeholder="Ex: Kaszuba"
                  onChange={(e) => setSobrenome(e.target.value)}
                />

              </div>
            </div>
          </div>
          
          <div className="contentBox">

            <div className="emailBox">
          
              <p className="text"> Informe seu e-mail institucional </p>
            
              <div className="email">

                <input
                  title="Email"
                  name="Email"
                  type="text"
                  value={email}
                  autoComplete="off"
                  placeholder="@alunos.utfpr.edu.br"
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>
            </div>
          </div>

          <div className="contentBox">

            <div className="passwordBox">
          
              <p className="text"> Insira sua senha </p>
            
              <div className="password">

                <input
                  title="Senha"
                  name="Senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

              </div>
            </div>

            <div className="passwordBox">
              
              <p className="text"> Repita sua senha </p>

              <div className="password">

                <input
                  title="SenhaAgain"
                  name="SenhaAgain"
                  type="password"
                  value={repsenha}
                  onChange={(e) => setRepsenha(e.target.value)}
                />

              </div>
            </div>
          </div>

          <div className="contentBox">

            <div className="dateBox">
          
              <p className="text"> Data de nascimento </p>
              
              <div className="date">

                <input
                  title="Data"
                  name="Data"
                  type="date"
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                />

              </div>
            </div>
          </div>

          <div className="contentBox">

            <div className="nicknameBox">
          
              <p className="text"> Crie seu apelido </p>

              <div className="nickname">

                <input
                  title="Apelido"
                  name="Apelido"
                  type="text"
                  value={apelido}
                  placeholder="@"
                  onChange={(e) => setApelido(e.target.value)}
                />

              </div>
            </div>
          </div>

          <div className="contentBox">

            <div className="button">
          
            <button type="button" onClick={handleRegister}>
              
                <p> REGISTRAR-SE </p>

              </button>
          
            </div>
          </div>
        </div>

        <div className="lastBox">
          
          <Link className="link" to="/">

            <h2 className="lastText"> Ja possui conta? Faca seu login </h2>

          </Link>

        </div>
      </div>

      <div className="logoBox">



      </div>

    </div>
  );
}