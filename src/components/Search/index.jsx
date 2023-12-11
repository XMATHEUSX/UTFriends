import React, { useState } from "react";
import './search.css'

export default function Search(props) {

    const [follow, setFollow] = useState(props.follow)
    const [id, setId] = useState(props.id)

    function ClickFollow() {
        setFollow(!follow)
        
    }
    
    function sendId() {
        props.receiveId(id)
    }

    return (

        <div className="conteinerSP">
            <div className="perfilImageSP">

            </div>

            <div className="infoSP">
                <div className="supInfoSP">

                    <p onClick={sendId}> {"@" + props.nickname} </p>

                    <button className={`${follow ? 'followingSP' : 'notFollowingSP'}`} onClick={ClickFollow}> {follow ? "Seguindo" : "Seguir"} </button>

                </div>

                <div className="botInfoSP">

                    <p> {props.bio} </p>

                </div>
            </div>
        </div>
    )
}