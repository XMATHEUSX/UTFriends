import React from "react";
import './feedbox.css'

export default function Feedbox({ config }, props) {

    if ( config == 'default' ) {

        return(

            <div className="conteinerFB">

                <h1> Feed </h1>

            </div>
        )

    }else if ( config == 'config') {

        return(

            <div className="conteinerFB">

                <h1> Config </h1>

            </div>
        )

    }else if ( config == 'community' ) {

        return(

            <div className="conteinerFB">

                <h1> Community </h1>

            </div>
        )

    }else if ( config == 'perfil' ) {

        return(

            <div className="conteinerFB">

                <h1> Perfil </h1>

            </div>
        )
    }
}