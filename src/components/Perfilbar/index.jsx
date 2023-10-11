import React, { useState }from "react";
import  "./perfilbar.css"

export default function Perfilbar({expanded}) {

    return(

        <div className={`${expanded ? 'expandedPB' : 'conteinerPB'}`}>

            {expanded ? "Recolher" : "Expandir"}

        </div>
    )
}