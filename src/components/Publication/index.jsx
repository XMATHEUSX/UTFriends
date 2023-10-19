import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import UTFriends from '/src/assets/images/UTFriends.png'
import './publication.css'

export default function Publication(props) {

    const [liked, setLiked] = useState(props.liked)

    function ClickLike() {

        setLiked(!liked)
    }

    if (props.type == 1) { // Publicação que só contem texto

        return (

            <div className="conteinerP">

                <div className="topContentP">

                    <div className="userInfoP">

                        <p>{"@" + props.user}</p>

                    </div>

                    <div className="publicationInfoP">

                        {liked ? 

                            <AiFillHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            /> 
                            
                            :

                            <AiOutlineHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            />
                        }

                        <p>{props.like}</p>

                    </div>
                </div>

                <div className="textContentP">

                    <p>{props.text}</p>

                </div>
            </div>
        )
    
    } else if (props.type == 2) { // Publicação que só tem imagem/vídeo

        return (

            <div className="conteinerP">

                <div className="topContentP">

                    <div className="userInfoP">

                        <p>{"@" + props.user}</p>

                    </div>

                    <div className="publicationInfoP">

                        {liked ? 

                            <AiFillHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            /> 
                            
                            :

                            <AiOutlineHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            />
                        }

                        <p>{props.like}</p>

                    </div>
                </div>

                <div className="imageContentP">

                    <img src={UTFriends} alt="Imagem"></img>

                </div>
            </div>
        )

    } else if (props.type == 3) { // Publicação que tem texto e vídeo

        return (

            <div className="conteinerP">

                <div className="topContentP">

                    <div className="userInfoP">

                        <p>{"@" + props.user}</p>

                    </div>

                    <div className="publicationInfoP">

                        {liked ? 

                            <AiFillHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            /> 
                            
                            :

                            <AiOutlineHeart
                                className="heartIconP"
                                onClick={ClickLike}
                                cursor={'pointer'}
                                size={24}
                            />
                        }

                        <p>{props.like}</p>

                    </div>
                </div>

                <div className="textContentP" style={{marginBottom: 10}}>

                    <p>{props.text}</p>

                </div>

                <div className="imageContentP">

                    <img src={UTFriends} alt="Imagem"></img>

                </div>
            </div>
        )

    }
}