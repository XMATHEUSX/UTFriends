import React from "react";
import  "./perfilbar.css"

export default function Perfilbar(props) {

    const dragStart = (e) => {

        e.dataTransfer.setData('text/plain', 'Arrastando esse componente')
    }

    return(

        <div 
            className="conteinerPB"
            draggable={true}
            onDragStart={dragStart}
            onDrag={props.onDragPerfilbar}>

        </div>
    )
}