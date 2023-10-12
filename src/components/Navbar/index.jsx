import React from "react";
import { BsPersonCircle } from 'react-icons/bs'
import { FaGear } from 'react-icons/fa6'
import Searchbox from "../Searchbox";
import "./navbar.css"

export default function Navbar(props) {

    return (

        <div className="conteinerNB">

            <div className={`${props.expanded ? 'expandedNB' : 'firstContentNB'}`}>

                <BsPersonCircle id="perfil" size={34} onClick={props.onClickPerfil} cursor="pointer"/>

            </div>

            <Searchbox/>

            <div className="secondContentNB">

                <FaGear id="config" size={30} onClick={props.onClickConfig} cursor="pointer"/>

            </div>
        </div>
    );
}