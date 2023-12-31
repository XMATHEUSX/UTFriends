import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import { BsFillRecordFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

import UsefulBox from "../UsefulBox";
import './configbox.css'

export default function Configbox(props) {

  // Declaração das constantes

  const [showPassword, setShowPassword] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const [PasswordBox, setPasswordBox] = useState(false)
  const [AccountBox, setAccountBox] = useState(false)
  const [DeleteBox, setDeleteBox] = useState(false)

  const [senhaAtual, setSenhaAtual] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [repNovaSenha, setRepNovaSenha] = useState('')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  
  const [sucesso, setSucesso] = useState(null)
  const [display, setDisplay] = useState(null)
  const [message, setMessage] = useState('')

  var token = localStorage.getItem("token");


  // Declaração das funções

  function clickAccountBox() {
    const userData = {
      token: token,
    };
    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/infoConta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        if(data.success){
          setNome(data.info.nm_usuario)
          setEmail(data.info.email)
          setTelefone(data.info.telefone)

          const novadata = data.info.dt_nascimento.split("T")
          setDataNascimento(modifyDate(novadata[0]))
        }
      });

    setAccountBox(!AccountBox);

    if (PasswordBox || DeleteBox) {

      setDeleteBox(false);
      setPasswordBox(false);
      
    }
  }

  const modifyDate = (data) => {

    var ano = data.split('-')[0];
    var mes = data.split('-')[1];
    var dia = data.split('-')[2];

    return dia + '/' + mes + '/' + ano
  }

  function clickPasswordBox() {

    setPasswordBox(!PasswordBox);

    if (DeleteBox || AccountBox) {

      setAccountBox(false);
      setDeleteBox(false);
      
    }
  }

  function clickDeleteBox() {

    setDeleteBox(!DeleteBox);

    if (PasswordBox || AccountBox) {

      setAccountBox(false);
      setPasswordBox(false);

    }
  }

  function changePassword() {

    const userData = {
      passwordAtual: senhaAtual,
      token: token,
      passwordNovo: novaSenha,
    };

    const userVal = {

      passwordAtual: false,
      passwordNovo: false,
    }

    if (senhaAtual != '') {

      document.getElementById('noSenhaAtual').style.display = 'none'
      userVal.passwordAtual = true;

    } else {

      document.getElementById('noSenhaAtual').style.display = 'block'
    }

    if (novaSenha != '') {

      document.getElementById('noSenhaNova').style.display = 'none'

      if (/^.{8,}$/.test(novaSenha)) {

        document.getElementById('weakSenhaNova').style.display = 'none'

        if (novaSenha == repNovaSenha) {

          document.getElementById('erroRepSenhaNova').style.display = 'none'
          userVal.passwordNovo = true
  
        } else {
  
          document.getElementById('erroRepSenhaNova').style.display = 'block'
  
        }

      } else {

        document.getElementById('weakSenhaNova').style.display = 'block'
        document.getElementById('erroRepSenhaNova').style.display = 'none'

      }

    } else {

      document.getElementById('noSenhaNova').style.display = 'block'
      document.getElementById('erroRepSenhaNova').style.display = 'none'
      document.getElementById('weakSenhaNova').style.display = 'none'

    }

    const validacao = Object.values(userVal).every(value => value === true);

    if (validacao) {

      fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/verifypassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSucesso(true)
            setDisplay(true)
          } else if (!data.success) {
            setSucesso(false)
            setDisplay(true)
            setMessage("Ocorreu algum erro ao atualizar sua senha")
            if (data.message == "senha errada.") {
              setMessage("A senha informada está incorreta")
            }
          }
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
      } 
    }
  
  function cleanData() {

    setSenhaAtual("");
    setNovaSenha("");
    setRepNovaSenha("");
  }

  function displayOff() {

    setDisplay(false);
  }

  function displayClose() {

    displayOff();
    cleanData();
  }

  function clickClose() {

    displayOff();
    cleanData();
  }

  function updateSuccess() {

    return (

      <UsefulBox
        display={display}
        width={"45%"}
        height={"20%"}
        top={'40%'}
        left={'27.5%'}
        name={"Update_Success"}
        title={"Password Changed"}
        message={"Sua senha foi alterada com sucesso"}
        button={"Fechar"}
        onClickClose={displayOff}
        onClickButton={clickClose}
      />

    );
  }

  function updateFailed() {

    return (

      <UsefulBox
        display={display}
        width={"45%"}
        height={"20%"}
        top={'40%'}
        left={'27.5%'}
        name={"Update_Failed"}
        title={"ERROR"}
        message={message}
        button={"Tentar Novamente"}
        onClickClose={displayOff}
        onClickButton={displayClose}
      />

    );
  }

  // Declaração das funções com exibição

  function showAccountBox() {

    return (

      <div className="infoBoxConfigBox">

        <div className="uniqueInfoConfigBox">

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Nome Completo: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {nome} </p>

          </div>
        </div>

        <div className="uniqueInfoConfigBox">

          <div className="infoContentConfigBox" style={{width: '100%'}}>

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Email: </p>
            <p style={{fontWeight: 'normal', padding: '2%'}}> {email} </p>

          </div>
        </div>

        <div className="duoInfoConfigBox">

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Telefone: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {telefone} </p>

          </div>

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Data de Nascimento: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {dataNascimento.split("T")} </p>

          </div>      
        </div>
      </div>
    )
  }

  function showPasswordBox() {

    return (

      <div className="infoBoxConfigBox" style={{height: '25%', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>

        <div className="inputConteinerConfigBox">

          <p> Informe sua senha atual </p>

          <input
            title="SenhaAtual"
            name="SenhaAtual"
            type="password"
            maxLength={16}
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />

          <p className="errorMsgConfigBox" id="noSenhaAtual"> Campo obrigatório </p>

        </div>

        <div className="duoInputConfigBox">

          <div className="inputConteinerConfigBox" style={{height: '100%'}}>

            <p> Informe sua nova senha </p>

            <input
              title="SenhaNova"
              name="SenhaNova"
              type="password"
              maxLength={16}
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />

            <p className="errorMsgConfigBox" id="noSenhaNova"> Campo obrigatório </p>

            <p className="errorMsgConfigBox" id="weakSenhaNova"> Senha fraca </p>

          </div>

          <div className="inputConteinerConfigBox" style={{height: '100%'}}>

            <p> Repita a sua nova senha </p>

            <input
              title="RepSenhaNova"
              name="RepSenhaNova"
              type="password"
              maxLength={16}
              value={repNovaSenha}
              onChange={(e) => setRepNovaSenha(e.target.value)}
            />

            <p className="errorMsgConfigBox" id="erroRepSenhaNova"> Senhas divergentes </p>

          </div>
        </div>

        <div className="passwordButtonConfigBox">

          <button onClick={changePassword}> Trocar Senha </button>

        </div>
      </div>
    )
  }

  function showDeleteBox() {

    return (

      <div className="infoBoxConfigBox">

        <p> Tem certeza que deseja excluir a sua conta? </p>

        <div className="buttonConteinerConfigBox">

          <button onClick={props.onClickDelete}> Tenho Certeza </button>

          <button onClick={clickDeleteBox}> Cancelar </button>

        </div>
      </div>
    )
  }

  // Configurações de return

  if (props.config == 'config') {

		return (

			<div className="conteinerConfigBox">

        {sucesso ? updateSuccess() : updateFailed()}

				<div className="headerConfigBox">
            
          <FiArrowLeft
            onClick={props.onClickClose}
            className="returnIconConfigBox"
            cursor={"pointer"}
          />

          <p> Configurações </p>

        </div>
      
        <div className="optionsConteinerConfigBox">

          <div className="optionConfigBox">

            <button onMouseEnter={() => setShowAccount(!showAccount)} onMouseLeave={() => setShowAccount(!showAccount)} onClick={clickAccountBox}>

              <BsFillRecordFill size={16}/>
              
              <h1> Informações da Conta </h1>

              <p className={`visibility ${showAccount ? 'show' : ''}`}> Acesse os dados cadastrados em sua conta, como: nome, email e telefone </p>              
              
            </button>
         </div>

         {AccountBox ? showAccountBox() : null }

          <div className="optionConfigBox">

            <button onMouseEnter={() => setShowPassword(!showPassword)} onMouseLeave={() => setShowPassword(!showPassword)} onClick={clickPasswordBox}>

              <BsFillRecordFill size={16}/>
              
              <h1> Alterar Senha </h1>

              <p className={`visibility ${showPassword ? 'show' : ''}`}> Altere sua senha a qualquer momento, mas se lembre que ela deve ter no mínimo oito caracteres </p>             
              
              </button>
          </div>

          {PasswordBox ? showPasswordBox() : null }

          <div className="optionConfigBox">

            <button onMouseEnter={() => setShowDelete(!showDelete)} onMouseLeave={() => setShowDelete(!showDelete)} onClick={clickDeleteBox}> 

              <BsFillRecordFill size={16}/>
            
              <h1> Excluir Conta </h1>

              <p className={`visibility ${showDelete ? 'show' : ''}`}> Ao exluir sua conta, todos seus dados, postagens e interações com outros usuários serão perdidos </p>

            </button>
          </div>

          {DeleteBox ? showDeleteBox() : null }

        </div>
			</div>
		)
	}
}