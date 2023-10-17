import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Registration from "../../components/Registration";
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
  const [cursoID, setCursoID] = useState("")

  const [curso, setCurso] = useState("")

  const [sucesso, setSucesso] = useState(null);
  const [display, setDisplay] = useState(null);

  const navigate = useNavigate();

  const inputDate = new Date(nascimento);
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);

  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 16);

  const selecionarCurso = (options) => {

    setCurso(options)
    setCursoID(options.value)
  }

  const handleRegister = () => {

    const userVal = {

      name: false,
      surname: false,
      email: false,
      password: false,
      date: false,
      telphone: false,
      nickname: false,
      curse: false,
    }

    const userData = {

      name: nome,
      surname: sobrenome,
      email: email,
      password: senha,
      nickname: apelido,
    };

    if (nome != '') {

      document.getElementById("noNome").style.display = "none";

      if (VerifyNome(nome)) {

        userVal.name = true;
        document.getElementById("errorNome").style.display = "none";
  
      } else {document.getElementById("errorNome").style.display = "block";}

    } else {document.getElementById("noNome").style.display = "block";}

    if (sobrenome != '') {

      document.getElementById("noSobrenome").style.display = "none";

      if (VerifyNome(sobrenome)) {

        userVal.surname = true;
        document.getElementById("errorSobrenome").style.display = "none";
  
      } else {document.getElementById("errorSobrenome").style.display = "block";}

    } else {document.getElementById("noSobrenome").style.display = "block";}

    if (email != '') {

      document.getElementById("noEmail").style.display = "none";

      if (VerifyEmail(email)) {

        document.getElementById("errorEmail").style.display = "none";

        if (email == repemail) {
  
          userVal.email = true;
          document.getElementById("errorRepEmail").style.display = "none";
  
        } else {document.getElementById("errorRepEmail").style.display = "block";}
  
      } else {document.getElementById("errorEmail").style.display = "block";}

    } else {document.getElementById("noEmail").style.display = "block";}

    if (senha != '') {

      document.getElementById("noSenha").style.display = "none";

      if (repsenha == senha) {

        userVal.password = true;
        document.getElementById("errorRepSenha").style.display = "none";

      } else {document.getElementById("errorRepSenha").style.display = "block";}

    } else {document.getElementById("noSenha").style.display = "block";}

    if (inputDate != 'Invalid Date') {

      document.getElementById("noData").style.display = "none";

      if (inputDate <= oneYearAgo) {
        
        userVal.date = true;
        document.getElementById("errorData").style.display = "none";

      } else { document.getElementById("errorData").style.display = "block"; }

    } else {document.getElementById("noData").style.display = "block";}

    if (curso != '') {

      document.getElementById("noCurso").style.display = "none";
      userVal.curse = true;

    } else {document.getElementById("noCurso").style.display = "block";}

    if (telefone != '') {

      document.getElementById("noNumero").style.display = "none";

      if (VerifyNumero(telefone)) {

        userVal.telphone = true;
        document.getElementById("errorNumero").style.display = "none";

      } else {document.getElementById("errorNumero").style.display = "block";}

    } else {document.getElementById("noNumero").style.display = "block";}

    if (apelido != '') {

      userVal.nickname = true;
      document.getElementById("noApelido").style.display = "none";

    } else {document.getElementById("noApelido").style.display = "block";}

    const validacao = Object.values(userVal).every(value => value === true);

    if (validacao) {

      fetch("http://localhost:3000/api/v1/profile/register", {

        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(userData),

      })

        .then((response) => response.json())
        .then((data) => {
          
          console.log(data);
        
          if (data.success) {
            
            setSucesso(true);
            setDisplay(true);

          } else if (!data.success) {
            
            setSucesso(false);
            setDisplay(true);
          }

        })
        .catch((error) => {console.error("Erro:", error);});
    }
  }

  function CloseIcon() { setDisplay(false) }

  function OpenLogin() { navigate('/signin') }

  function RegisterSuccess() { return( <Registration display={display} success={sucesso} onClickClose={CloseIcon} onClickButton={OpenLogin}/> ) }

  function RegisterFailure() { return( <Registration display={display} success={sucesso} onClickClose={CloseIcon} onClickButton={CloseIcon}/> ) }

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

            <SelectClass onChange={selecionarCurso} selectedValue={curso}/>

            <p className="errorMsgSU" id="noCurso"> Campo Obrigatório </p>

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

              <p className="errorMsgSU" id="noData"> Campo obrigatório </p>

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

      {sucesso ? RegisterSuccess() : RegisterFailure()}

    </div>
  );
}
