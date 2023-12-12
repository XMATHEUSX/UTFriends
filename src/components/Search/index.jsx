import React, { useState } from "react";
import './search.css'

export default function Search(props) {

    const [follow, setFollow] = useState(props.follow)

    function ClickFollow() {
        props.followUser(props.nickname,!follow)
        setFollow(!follow)
    }


    function sendNickname() {
        props.receiveNickname(props.nickname)
    }

    return (

        <div className="conteinerSP">
            <div className="perfilImageSP">

            </div>

            <div className="infoSP">
                <div className="supInfoSP">

                    <p onClick={sendNickname}> {"@" + props.nickname} </p>

                    <button className={`${follow ? 'followingSP' : 'notFollowingSP'}`} onClick={ClickFollow}> {follow ? "Seguindo" : "Seguir"} </button>

                </div>

                <div className="botInfoSP">

                    <p> {props.bio} </p>

                </div>
            </div>
        </div>
    )
}