import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import './configbox.css'

export default function Configbox(props) {

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
			</div>
		)
	}
}