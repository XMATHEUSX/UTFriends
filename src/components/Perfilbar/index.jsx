import React, { useState } from "react";
import { AiFillHome, AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { FaGear } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi2'

import  "./perfilbar.css"

export default function Perfilbar(props) {

    /*function perfilExpanded(valor) {

        return(  
        
            <div className="perfilContentPB">

                <div className="topContentPB">

                    <div className="perfilImagePB">

                        {props.img}

                    </div>

                    <p className="nicknamePB"> {"@" + props.nickname} </p>

                    <div className="followsPB">

                        <p> {"Segidores: " + props.followers} </p>

                        <p> {"Seguindo: " + props.following} </p>

                    </div>

                </div>

                <div className="midleContentPB">

                    <p>{props.bio}</p>

                </div>
                
                <div className="bottomContentPB">

                    <button onClick={props.onClickPerfilConfig}> Configurar Perfil </button>

                </div>
            </div>
        )

    }*/

    const [menu, setMenu] = useState(false)

    function ClickMenu() {

        setMenu(!menu)
    }

    return(

        <div className={`${menu ? 'expandedPB' : 'conteinerPB'}`}>

            <div className="iconContentPB">

                <div className={`${menu ? 'iconExpandedPB' : 'contentPB'}`}>

                    <AiFillHome 
                        onClick={props.onClickHome}
                        cursor={"pointer"}
                        size={35}
                    />

                    {menu ? <p>Feed</p> : ""}

                </div>

                <div className={`${menu ? 'iconExpandedPB' : 'contentPB'}`}>

                    <BsPersonCircle
                        onClick={props.onClickPerfil}
                        cursor={"pointer"}
                        size={35}
                    />

                    {menu ? <p>Perfil</p> : ""}

                </div>

                <div className={`${menu ? 'iconExpandedPB' : 'contentPB'}`}>

                    <HiUserGroup
                        onClick={props.onClickCommunity}
                        cursor={"pointer"}
                        size={35}
                    />

                    {menu ? <p>Comunidades</p> : ""}

                </div>

                <div className={`${menu ? 'iconExpandedPB' : 'contentPB'}`}>

                    <FaGear
                        onClick={props.onClickConfig}
                        cursor={"pointer"}
                        size={35}
                    />

                    {menu ? <p>Configurações</p> : ""}

                </div>
            </div>

            <div className="contentPB">

                {menu ? <AiOutlineMenuFold
                            onClick={ClickMenu}
                            cursor={"pointer"}
                            size={35}
                        />

                      : <AiOutlineMenuUnfold
                            onClick={ClickMenu}
                            cursor={"pointer"}
                            size={35}
                        />}

            </div>
        </div>
    )
}