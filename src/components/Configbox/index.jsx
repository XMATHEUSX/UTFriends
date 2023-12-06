import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import { BsFillRecordFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

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

  // Declaração das funções

  function clickAccountBox() {

    setAccountBox(!AccountBox);

    if (PasswordBox || DeleteBox) {

      setDeleteBox(false);
      setPasswordBox(false);
      
    }
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

  function deleteAccount() {

    alert('Conta Deletada');
  }

  function changePassword() {

    alert('Senha Alterada');
  }

  // Declaração das funções com exibição

  function showAccountBox() {

    return (

      <div className="infoBoxConfigBox">

        <div className="duoInfoConfigBox">

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Nome: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {props.nome} </p>

          </div>

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Sobrenome: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {props.sobrenome} </p>

          </div>
        </div>

        <div className="uniqueInfoConfigBox">

          <div className="infoContentConfigBox" style={{width: '100%'}}>

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Email: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {'joaokaszuba@alunos.utfpr.edu.br'} </p>

          </div>
        </div>

        <div className="duoInfoConfigBox">

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Telefone: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {props.email} </p>

          </div>

          <div className="infoContentConfigBox">

            <FaChevronRight size={15} style={{marginRight: '1%'}}/>

            <p> Data de Nascimento: </p>

            <p style={{fontWeight: 'normal', padding: '2%'}}> {props.nascimento} </p>

          </div>      
        </div>
      </div>
    )
  }

  function showPasswordBox() {

    return (

      <div className="infoBoxConfigBox" style={{height: '30%', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>

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

          <button onClick={deleteAccount}> Tenho Certeza </button>

          <button onClick={clickDeleteBox}> Cancelar </button>

        </div>
      </div>
    )
  }

  // Configurações de return

  if (props.config == 'config') {

		return (

			<div className="conteinerConfigBox">

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