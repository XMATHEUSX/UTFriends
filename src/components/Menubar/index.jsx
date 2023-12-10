import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";

import "./perfilbar.css";

export default function Perfilbar(props) {
  return (
    <div className={`${props.menu ? "expandedPB" : "conteinerPB"}`}>
      <div className="iconContentPB">
        <div className={`${props.menu ? "iconExpandedPB" : "contentPB"}`}>
          <AiFillHome
            onClick={props.onClickHome}
            cursor={"pointer"}
            size={35}
          />

          {props.menu ? <p onClick={props.onClickHome}>Feed</p> : ""}
        </div>

        <div className={`${props.menu ? "iconExpandedPB" : "contentPB"}`}>
          <BsPersonCircle
            onClick={props.onClickPerfil}
            cursor={"pointer"}
            size={35}
          />

          {props.menu ? <p onClick={props.onClickPerfil}>Perfil</p> : ""}
        </div>

        <div className={`${props.menu ? "iconExpandedPB" : "contentPB"}`}>
          <HiUserGroup
            onClick={props.onClickCommunity}
            cursor={"pointer"}
            size={35}
          />

          {props.menu ? (
            <p onClick={props.onClickCommunity}>Comunidades</p>
          ) : (
            ""
          )}
        </div>

        <div className={`${props.menu ? "iconExpandedPB" : "contentPB"}`}>
          <FaGear onClick={props.onClickConfig} cursor={"pointer"} size={35} />

          {props.menu ? <p onClick={props.onClickConfig}>Configurações</p> : ""}
        </div>
      </div>
    </div>
  );
}
