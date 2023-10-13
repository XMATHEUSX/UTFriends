import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import SelectClass from '../../components/SelectClass/index'
import { VerifyNome, VerifyEmail, VerifyNumero } from "./verify.js";
import "./signup.css";

export default function SignUp() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [repemail, setRepemail] = useState("");
  const [senha, setSenha] = useState("");
  const [repsenha, setRepsenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [apelido, setApelido] = useState("");

  const handleRegister = () => {

    const userVal = {

      name: false,
      surname: false,
      email: false,
      password: false,
      date: false,
      telphone: false,
      nickname: false,
    }

    const userData = {

      name: nome,
      surname: sobrenome,
      email: email,
      password: senha,
      nickname: apelido,
    };

    if (nome != '') {

      if (VerifyNome(nome)) {

        userVal.name = true;
  
      } else {document.getElementById("errorNome").style.display = "block";}

    } else {document.getElementById("noNome").style.display = "block";}

    if (sobrenome != '') {

      if (VerifyNome(sobrenome)) {

        userVal.surname = true;
  
      } else {document.getElementById("errorSobrenome").style.display = "block";}

    } else {document.getElementById("noSobrenome").style.display = "block";}

    if (email != '') {

      if (VerifyEmail(email)) {

        if (email == repemail) {
  
          userVal.email = true;
  
        } else {document.getElementById("errorRepEmail").style.display = "block";}
  
      } else {document.getElementById("errorEmail").style.display = "block";}

    } else {document.getElementById("noEmail").style.display = "block";}

    if (senha != '') {

      if (repsenha == senha) {

        userVal.password = true;

      } else {document.getElementById("errorRepSenha").style.display = "block";}

    } else {document.getElementById("noSenha").style.display = "block";}

    if (telefone != '') {

      if (VerifyNumero(telefone)) {

        userVal.telphone = true;

      } else {document.getElementById("errorNumero").style.display = "block";}

    } else {document.getElementById("noNumero").style.display = "block";}

    if (apelido != '') {

      userVal.nickname = true;

    } else {document.getElementById("noApelido").style.display = "block";}

    const validacao = Object.values(userVal).every(value => value === true);

    if (validacao) {

      alert("deu certo");

      fetch("http://localhost:3000/api/v1/profile/register", {

        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(userData),

      })

        .then((response) => response.json())
        .then((data) => {console.log(data);})
        .catch((error) => {console.error("Erro:", error);});
    }
  }

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

              <p className="errorMsgSU" id="errorNome"> Nome inválido </p>

              <p className="errorMsgSU" id="noNome"> Campo obrigatório </p>

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

              <p className="errorMsgSU" id="errorSobrenome"> Sobrenome inválido </p>

              <p className="errorMsgSU" id="noSobrenome"> Campo obrigatório </p>

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

            <p className="errorMsgSU" id="errorEmail"> Email inválido </p>

            <p className="errorMsgSU" id="noEmail"> Campo obrigatório </p>

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

            <p className="errorMsgSU" id="errorRepEmail"> Email divergente </p>

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

              <p className="errorMsgSU" id="noSenha"> Campo obrigatório </p>

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

              <p className="errorMsgSU" id="errorRepSenha"> Senha divergente </p>

            </div>
          </div>

          <div className="uniqueContentSU">

            <p> Selecione seu curso </p>

            <SelectClass/>

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

              <p className="errorMsgSU" id="errorData"> Data inválida </p>

            </div>

            <div className="secondContentSU">

              <p> Informe seu telefone </p>

              <input
                title="Telefone"
                name="Telefone"
                type="tel"
                value={telefone}
                placeholder="(xx) xxxxx-xxxx"
                onChange={(e) => setTelefone(e.target.value)}
                required
                pattern="^[0-9]{11}$"
              />

              <p className="errorMsgSU" id="errorNumero"> Número inválido </p>

              <p className="errorMsgSU" id="noNumero"> Campo obrigatório </p>

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

              <p className="errorMsgSU" id="noApelido"> Campo obrigatório </p>

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
