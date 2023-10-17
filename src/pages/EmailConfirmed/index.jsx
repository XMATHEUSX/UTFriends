import React, { useState } from "react";
import { Link } from "react-router-dom";
import './emailconfirmed.css'

export default function EmailConfirmed() {

    return (

        <div className="conteinerEC">
            <div className="boxEC">

                <div className="contentBoxEC">

                    <h1>Congratulations!</h1>

                    <p>Seu email foi verificado, agora só basta realizar o login para acessar a sua conta UTFriends</p>

                </div>

                <div className="bottomBoxEC">

                    <Link to={'/signin'} className="buttonLinkEC">

                        <button>Fazer Login</button>

                    </Link>

                </div>
            </div>
        </div>
    )
}