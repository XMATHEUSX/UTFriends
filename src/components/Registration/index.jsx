import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import './registration.css'

export default function Registration(props) {

    return props.display ? (

        <div className="conteinerR">

            <div className="topContentR">

                <p> {props.success ? "Registration_Success" : "Registration_Failure"} </p>

                <AiFillCloseSquare
                    title="close"
                    className="closeIconR"
                    size={26}
                    onClick={props.onClickClose}
                />

            </div>

            <div className="contentR">

                <h1> {props.success ? "Deu Certo" : "ERROR"} </h1>

                <button onClick={props.onClickButton}> {props.success ? "Fazer Login" : "Tentar Novamente"} </button>

            </div>
        </div>
    ) : (null)

}