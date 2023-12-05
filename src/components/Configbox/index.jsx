import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import { BsFillRecordFill } from "react-icons/bs";

import './configbox.css'

export default function Configbox(props) {

  // Declaração das constantes

  const [showPassword, setShowPassword] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  // Declaração das funções

  function changePassword() {

    setShowPassword(!showPassword)
  }

  function changeAccount() {

    setShowAccount(!showAccount)
  } 

  function changeDelete() {

    setShowDelete(!showDelete)
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

            <button onMouseEnter={changeAccount} onMouseLeave={changeAccount}>

              <BsFillRecordFill size={16}/>
              
              <h1> Informações da Conta </h1>

              <p className={`visibility ${showAccount ? 'show' : ''}`}> Acesse os dados cadastrados em sua conta, como: nome, email e telefone </p>              
              
              </button>

         </div>

          <div className="optionConfigBox">

            <button onMouseEnter={changePassword} onMouseLeave={changePassword}>

              <BsFillRecordFill size={16}/>
              
              <h1> Alterar Senha </h1>

              <p className={`visibility ${showPassword ? 'show' : ''}`}> Altere sua senha a qualquer momento, mas se lembre que ela deve ter no mínimo oito caracteres </p>             
              
              </button>

         </div>

         <div className="optionConfigBox">

          <button onMouseEnter={changeDelete} onMouseLeave={changeDelete}> 

            <BsFillRecordFill size={16}/>
            
            <h1> Excluir Conta </h1>

            <p className={`visibility ${showDelete ? 'show' : ''}`}> Ao exluir sua conta, todos seus dados, postagens e interações com outros usuários serão perdidos </p>

          </button>

         </div>

        </div>
			</div>
		)
	}
}