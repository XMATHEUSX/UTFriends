import React from "react";
import  "./perfilbar.css"

export default function Perfilbar(props) {

    function perfilExpanded() {

        return(  
        
            <div className="perfilContentPB">

                <div className="topContentPB">

                    <div className="perfilImagePB">

                        {props.img}

                    </div>

                    <p className="nicknamePB"> {"@" + props.nickname} </p>

                    <div className="followsPB">

                        <p> {"Segidores: " + props.followers} </p>

                        <p> {"Seguindo: " + props.following} </p>

                    </div>

                </div>

                <div className="midleContentPB">

                    <p>{props.bio}</p>

                </div>
                
                <div className="bottomContentPB">

                    <button onClick={props.onClickPerfilConfig}> Configurar Perfil </button>

                </div>
            </div>
        )
    }

    return(

        <div className={`${props.expanded ? 'expandedPB' : 'conteinerPB'}`} onClick={props.onClickPerfilbar}>

            {props.expanded ? perfilExpanded() : ""}

        </div>
    )
}