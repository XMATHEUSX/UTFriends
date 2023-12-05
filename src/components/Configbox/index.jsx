import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import { BsFillRecordFill } from "react-icons/bs";

import './configbox.css'

export default function Configbox(props) {

  // Declaração das constantes

  const [showPassword, setShowPassword] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const [PasswordBox, setPasswordBox] = useState(false)
  const [AccountBox, setAccountBox] = useState(false)
  const [DeleteBox, setDeleteBox] = useState(false)

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

  // Declaração das funções com exibição

  function showAccountBox() {

    return (

      <div id="AccountBox" className="infoBoxConfigBox">

        <p> AQUI </p>

      </div>
    )
  }

  function showPasswordBox() {

    return (

      <div id="AccountBox" className="infoBoxConfigBox">

        <p> AQUI </p>

      </div>
    )
  }

  function showDeleteBox() {

    return (

      <div id="AccountBox" className="infoBoxConfigBox">

        <p> Tem certeza que quer excluir a sua conta? </p>

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