import React from "react";
import { Link } from "react-router-dom";

import './emailconfirmed.css';

export default function EmailConfirmed() {
  var urlAtual = window.location.href;

  var url = new URL(urlAtual);

  var code = url.searchParams.get("code");

  const userData = {
    token: code,
  };

  fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro:", error);
    });

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
  );
}
