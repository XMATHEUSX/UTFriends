import { AiFillCloseSquare } from "react-icons/ai";
import React from "react";
import './feedbox.css'

export default function Feedbox(props) {

    if ( props.config == 'default' ) {

        return(

            <div className="conteinerFB">
    
                <h1> Feed </h1>
    
            </div>
        )

    }else if ( props.config == 'config') {

        return(

            <div className="conteinerFB">
    
                <h1> Config </h1>

                <button onClick={props.onClickClose}> Fechar </button>
    
            </div>
        )

    }else if ( props.config == 'community' ) {

        return(

            <div className="conteinerFB">
    
                <h1> Community </h1>
    
            </div>
        )

    }else if ( props.config == 'perfilConfig' ) {

        return(

            <div className="conteinerFB">
                <div className="headerPerfilConfigFB">
    
                    <p> Configurações do Perfil </p>

                    <AiFillCloseSquare 
                        onClick={props.onClickClose} 
                        className="closeIconFB"
                        cursor={"pointer"}
                    />

                </div>

                <div className="bodyPerfilConfigFB">

                    <p> Configurações </p>

                </div>
            </div>
        )

    }else if( props.config == 'perfil' ) {

        return(

            <div className="conteinerFB">
    
                <h1> Perfil </h1>
    
            </div>
        )
    }
}