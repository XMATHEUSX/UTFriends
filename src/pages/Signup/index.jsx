import { AiFillCloseSquare } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './signup.css'

export default function SignUp() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [repemail, setRepemail] = useState('')
  const [senha, setSenha] = useState('')
  const [repsenha, setRepsenha] = useState('')
  const [curso, setCurso] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [telefone, setTelefone] = useState('')
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

    <div className="conteinerSU">

      <div className="infoSU">

        <p> No informations </p>

      </div>
    
      <div className="boxSU">
      
        <div className="titleBoxSU">
        
          <p> New_Account </p>

          <Link to="/">

            <AiFillCloseSquare title="close" className="closeIconSU" size={28} />

          </Link>

        </div>

        <div className="contentBoxSU">
        
          <div className="splittedContentSU">

            <div className="firstContentSU">

              <p> Nome </p>

              <input
                  title="Nome"
                  name="Nome"
                  type="text"
                  value={nome}
                  placeholder="Ex: João"
                  onChange={(e) => setNome(e.target.value)}
                />

            </div>

            <div className="secondContentSU">

              <p> Sobrenome </p>

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

          <div className="uniqueContentSU">

            <p> Informe seu e-mail institucional </p>

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

          <div className="uniqueContentSU">

            <p> Repita seu e-mail institucional </p>

            <input
                  title="RepitirEmail"
                  name="RepetirEmail"
                  type="text"
                  value={repemail}
                  autoComplete="off"
                  placeholder="@alunos.utfpr.edu.br"
                  onChange={(e) => setRepemail(e.target.value)}
                />

          </div>

          <div className="splittedContentSU">

            <div className="firstContentSU">

              <p> Informe sua senha </p>

              <input
                  title="Senha"
                  name="Senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

            </div>

            <div className="secondContentSU">

              <p> Repita sua senha </p>

              <input
                  title="RepetirSenha"
                  name="RepetirSenha"
                  type="password"
                  value={repsenha}
                  onChange={(e) => setRepsenha(e.target.value)}
                />
              
            </div>
          </div>

          <div className="uniqueContentSU">

            <p> Selecione seu curso </p>
            <input
                  title="Curso"
                  name="Curso"
                  type="text"
                  value={curso}
                  placeholder="Ex: Engenharia de Computação"
                  onChange={(e) => setCurso(e.target.value)}
                />

          </div>

          <div className="splittedContentSU">

            <div className="firstContentSU">

              <p> Data de nascimento </p>

              <input
                  title="Data"
                  name="Data"
                  type="date"
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                />

            </div>

            <div className="secondContentSU">

              <p> Informe seu telefone </p>

              <input
                  title="Telefone"
                  name="Telefone"
                  type="tel"
                  value={telefone}
                  placeholder='(+55)'
                  onChange={(e) => setTelefone(e.target.value)}
                />
              
            </div>
          </div>

          <div className="splittedContentSU">

            <div className="firstContentSU">

              <p> Crie seu apelido </p>

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

          <div className="bottomBoxSU">

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
      </div>
  );
}