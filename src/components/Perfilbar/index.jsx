import React from "react";
import  "./perfilbar.css"

export default function Perfilbar(props) {

    function perfilExpanded() {

        return  <div className="perfilContentPB">

                    <p> PUTA </p>

                    <button onClick={props.onClickPerfilConfig} > Configurar Perfil </button>

                </div>;
    }

    return(

        <div className={`${props.expanded ? 'expandedPB' : 'conteinerPB'}`} onClick={props.onClickPerfilbar}>

            {props.expanded ? perfilExpanded() : ""}

        </div>
    )
}