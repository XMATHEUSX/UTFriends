import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import './usefulbox.css'

export default function UsefulBox(props) {

    return props.display ? (

        <div className="conteinerUB" style={{zIndex: 5}}>

            <div className="topContentUB">

                <p> {props.name} </p>

                <AiFillCloseSquare
                    title="close"
                    className="closeIconUB"
                    size={26}
                    onClick={props.onClickClose}
                    cursor={'pointer'}
                />

            </div>

            <div className="contentUB">

                <h1> {props.title} </h1>

                <p> {props.anymessage ? props.message : ''} </p>

                <button onClick={props.onClickButton}> {props.button} </button>

            </div>
        </div>
    ) : (null)

}