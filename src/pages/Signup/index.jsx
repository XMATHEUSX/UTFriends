import { AiFillCloseSquare } from "react-icons/ai";
import GoogleFonts from "react-google-fonts";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import verify_nome from "./verify.js";
import "./signup.css";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [repemail, setRepemail] = useState("");
  const [senha, setSenha] = useState("");
  const [repsenha, setRepsenha] = useState("");
  const [curso, setCurso] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [apelido, setApelido] = useState("");

  const handleRegister = () => {
    const userData = {
      name: nome,
      surname: sobrenome,
      email: email,
      password: senha,
      nickname: apelido,
    };

    if (verify_nome(nome)) {
      alert("deu certo");
      fetch("http://localhost:3000/api/v1/profile/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
    document.getElementById("errorNome").style.display = "block";
  };
  return (
    <div className="conteinerSU">
      <div className="boxSU">
        <div className="titleBoxSU">
          <p> New_Account </p>

          <Link to="/">
            <AiFillCloseSquare
              title="close"
              className="closeIconSU"
              size={28}
            />
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

              <p className="errorMsgSU" id="errorNome">
                Nome inválido
              </p>
            </div>

            <div className="secondContentSU">
              <p> Sobrenome </p>

              <input
                id="sobrenome"
                title="Sobrenome"
                name="Sobrenome"
                type="text"
                value={sobrenome}
                placeholder="Ex: Kaszuba"
                onChange={(e) => setSobrenome(e.target.value)}
                required
              />
              <p className="errorMsgSU" id="erroSobrenome">
                Sobrenome inválido
              </p>
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
              required
              pattern="^[A-Za-z]+@alunos.utfpr.edu.br$"
            />

            <p className="errorMsgSU">Email inválido</p>
          </div>

          <div className="uniqueContentSU">
            <p> Repita seu e-mail institucional </p>

            <input
              title="RepetirEmail"
              name="RepetirEmail"
              type="text"
              value={repemail}
              autoComplete="off"
              placeholder="@alunos.utfpr.edu.br"
              onChange={(e) => setRepemail(e.target.value)}
              required
              pattern="^[A-Za-z]+@alunos.utfpr.edu.br$"
            />
            <p id="errorMsgSU">Email divergente</p>
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
              <p className="errorMsgSU">Senha divergente</p>
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
                required
                pattern="^\d{2}/\d{2}/\d{4}$"
              />
              <p className="errorMsgSU">data inválida</p>
            </div>

            <div className="secondContentSU">
              <p> Informe seu telefone </p>

              <input
                title="Telefone"
                name="Telefone"
                type="tel"
                value={telefone}
                placeholder="(+55)"
                onChange={(e) => setTelefone(e.target.value)}
                required
                pattern="^[0-9]{11}$"
              />
              <p className="errorMsgSU">Número inválido</p>
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
            <FiArrowRight
              title="arrow"
              className="arrowIconSU"
              size={45}
              onClick={handleRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
