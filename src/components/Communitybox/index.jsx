import { FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";

import './communitybox.css'

export default function Communitybox(props) {

  if (props.config == 'community') {

		return (

			<div className="conteinerCommunityBox">

				<div className="headerCommunityBox">
					
					<FiArrowLeft
						onClick={props.onClickClose}
						className="returnIconCommunityBox"
						cursor={"pointer"}
					/>

					<p> Community </p>

				</div>
			</div>
		)
	}
}