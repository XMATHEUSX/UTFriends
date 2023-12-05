import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import SelectClass from '../../components/SelectClass/index';
import UsefulBox from "../../components/UsefulBox";
import "./signup.css";
import { VerifyEmail, VerifyNickname, VerifyNome, VerifyNumero, VerifySenha } from "./verify.js";

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

  const [curso, setCurso] = useState("");

  const [click, setClick] = useState(true);

  const [sucesso, setSucesso] = useState(null);
  const [display, setDisplay] = useState(null);
  const [erro, setErro] = useState(null);

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
      curso: false,
    }

    const userData = {

      name: nome,
      surname: sobrenome,
      email: email,
      password: senha,
      nickname: apelido,
      telphone: telefone,
      birth: nascimento,
      curso:cursoID,
    };

    /* Verificação das entradas de dados */

    if (nome != '') { // Verifica se o nome foi digitado

      document.getElementById("noNome").style.display = "none";

      if (VerifyNome(nome)) { // Verifica se o nome está de acordo com a expressão regular

        userVal.name = true;
        document.getElementById("errorNome").style.display = "none";
  
      } else {document.getElementById("errorNome").style.display = "block";}

    } else { 

      document.getElementById("noNome").style.display = "block" 
      document.getElementById("errorNome").style.display = "none"

    }

    if (sobrenome != '') { // Verifica se o sobrenome foi digitado

      document.getElementById("noSobrenome").style.display = "none";

      if (VerifyNome(sobrenome)) { // Verifica se o sobrenome está de acordo com a expressão regular

        userVal.surname = true;
        document.getElementById("errorSobrenome").style.display = "none";
  
      } else {document.getElementById("errorSobrenome").style.display = "block";}

    } else {

      document.getElementById("noSobrenome").style.display = "block"
      document.getElementById("errorSobrenome").style.display = "none"

    }

    if (email != '') { // Verifica se o e-mail foi digitado

      document.getElementById("noEmail").style.display = "none";

      if (VerifyEmail(email)) { // Verifica se o e-mail está de acordo com a expressão regular

        document.getElementById("errorEmail").style.display = "none";

        if (email == repemail) { // Verifica se as entradas de e-mail são iguais
  
          userVal.email = true;
          document.getElementById("errorRepEmail").style.display = "none";
  
        } else {document.getElementById("errorRepEmail").style.display = "block";}
  
      } else {document.getElementById("errorEmail").style.display = "block";}

    } else {

      document.getElementById("noEmail").style.display = "block"
      document.getElementById("errorEmail").style.display = "none"

    }

    if (senha != '') { // Verifica se a senha foi digitada

      document.getElementById("noSenha").style.display = "none";
      document.getElementById("errorRepSenha").style.display = "none";

      if(VerifySenha(senha)){ // Verifica se a senha está de acordo com a expressão regular

        document.getElementById("errorSenha").style.display = "none";
        document.getElementById("errorRepSenha").style.display = "none";

        if (repsenha == senha) { // Verifica se as entradas de senha são iguais

          userVal.password = true;
          document.getElementById("errorRepSenha").style.display = "none";
  
        } else {document.getElementById("errorRepSenha").style.display = "block";}

      } else {document.getElementById("errorSenha").style.display = "block";}

    } else {
      
      document.getElementById("noSenha").style.display = "block"
      document.getElementById("errorSenha").style.display = "none"
      document.getElementById("errorRepSenha").style.display = "none";
    
    }

    if (inputDate != 'Invalid Date') { // Verifica que a data foi digitada

      document.getElementById("noData").style.display = "none";

      if (inputDate <= oneYearAgo) { // Verifica que a data digitada é válida
        
        userVal.date = true;
        document.getElementById("errorData").style.display = "none";

      } else { document.getElementById("errorData").style.display = "block"; }

    } else {
      
      document.getElementById("noData").style.display = "block"
      document.getElementById("errorData").style.display = "none";
    
    }

    if (curso != '') { // Verifica se algum curso foi escolhido

      document.getElementById("noCurso").style.display = "none";
      userVal.curso = true;

    } else {
      
      document.getElementById("noCurso").style.display = "block"
    
    }

    if (telefone != '') { // Verifica se o numero foi digitado

      document.getElementById("noNumero").style.display = "none";

      if (VerifyNumero(telefone)) { // Verifica se o telefone está de acordo com a expressão regular

        userVal.telphone = true;
        document.getElementById("errorNumero").style.display = "none";

      } else {document.getElementById("errorNumero").style.display = "block";}

    } else {
      
      document.getElementById("noNumero").style.display = "block"
      document.getElementById("errorNumero").style.display = "none";
    
    }

    if (apelido != '') { // Verifica se o apelido foi digitado

      document.getElementById("noApelido").style.display = "none";

      if(VerifyNickname(apelido)){ // Verifica se o apelido está de acordo com a expressão regular

        userVal.nickname = true;
        document.getElementById("errorApelido").style.display = "none";

      }else {document.getElementById("errorApelido").style.display = "block";}

    } else {
      
      document.getElementById("noApelido").style.display = "block"
      document.getElementById("errorApelido").style.display = "none";
    
    }

    /* Envio dos dados validados para o registro no banco de dados */

    const validacao = Object.values(userVal).every(value => value === true);

    if (validacao && click) {

      setClick(false)

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
            setClick(true);

          } else if (!data.success) {
            
            setSucesso(false);
            setDisplay(true);
            setClick(true);
            setErro(data.message);
          }

        })
        .catch((error) => {console.error("Erro:", error);});
    }
  }

  function CloseIcon() { setDisplay(false) }

  function OpenLogin() { navigate('/signin') }

  function RegisterSuccess() {
    
    return ( 

      <UsefulBox 
        display={display}
        name={'Registration_Successful'} 
        title={'Congratulations'}
        button={'Fazer Login'}
        message={'Conta criada com sucesso, foi enviado um email para verificação desta'} 
        onClickClose={CloseIcon} 
        onClickButton={OpenLogin}
      /> 
    ) 
  }

  function RegisterFailure() {

    return( 
    
      <UsefulBox 
        display={display} 
        name={'Registration_Failed'}
        title={'ERROR'}
        button={'Tentar Novamente'}
        message={erro}
        onClickClose={CloseIcon} 
        onClickButton={CloseIcon}
      /> 
    ) 
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
                title="Sobrenome"
                name="Sobrenome"
                type="text"
                value={sobrenome}
                placeholder="Ex: Kaszuba"
                onChange={(e) => setSobrenome(e.target.value)}
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
              placeholder="@alunos.utfpr.edu.br"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="@alunos.utfpr.edu.br"
              onChange={(e) => setRepemail(e.target.value)}
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
                maxLength={15}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <p className="errorMsgSU" id="errorSenha"> Senha fraca </p>

              <p className="errorMsgSU" id="noSenha"> Campo obrigatório </p>

            </div>

            <div className="secondContentSU">

              <p> Repita sua senha </p>

              <input
                title="RepetirSenha"
                name="RepetirSenha"
                type="password"
                maxLength={15}
                value={repsenha}
                onChange={(e) => setRepsenha(e.target.value)}
              />

              <p className="errorMsgSU" id="errorRepSenha"> Senha divergente </p>

            </div>
          </div>

          <div className="uniqueContentSU">

            <p> Selecione seu curso </p>

            <SelectClass onChange={selecionarCurso} selectedValue={curso} class={'selectSC-SU'}/>

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
                maxLength={12}
              />
              <p className="errorMsgSU" id="errorApelido"> Apenas letras minúsculas </p>

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
