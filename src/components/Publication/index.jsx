import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GiDuckPalm } from "react-icons/gi";
import "./publication.css";

export default function Publication(props) {

  const curtidores = props.curtidores || [];
  const pensamento_id = parseInt(props.pensamento_id);
  const nickname = props.nickname;
  const user_id = parseInt(props.meu_id) || parseInt(props.user_id);

  const curtiuProprioPensamento = Array.from(curtidores).some((curtidor) => curtidor.user_id === user_id);

  const [liked, setLiked] = useState(props.liked ?? curtiuProprioPensamento);
  const [likes, setLikes] = useState(isNaN(props.like) ? 0 : props.like);

  function ClickLike() {
    
    const user_info = {
      user_id: user_id,
      nickname: nickname,
    };

    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/feed/curtirpensamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pensamento_id: pensamento_id,
        user_info: user_info,
      }),
    })
      .then((data) => {
        const newLikes = liked ? likes - 1 : likes + 1;
        setLikes(newLikes);
        setLiked(!liked);
      })
      .catch((error) => {
        console.error("Erro ao curtir:", error);
      });
  }

  if (props.type == 1) {

    return (

      <div className="conteinerP">

        <div className="topContentP">
          
          <div className="userInfoP">

            <p> {"@" + props.user}</p>

            {props.friend ? (
              <GiDuckPalm size={20} className="starIconP" />
            ) : null}

          </div>

          <div className="publicationInfoP">

            {liked ? (

              <AiFillHeart
                className="heartIconP"
                onClick={ClickLike}
                cursor={"pointer"}
                size={24}
              />

            ) : (

              <AiOutlineHeart
                className="heartIconP"
                onClick={ClickLike}
                cursor={"pointer"}
                size={24}
              />

            )}

            <p>{parseInt(likes, 10)}</p>

          </div>
        </div>

        <div className="textContentP">

          <p>{props.text}</p>

        </div>
      </div>
    );
  }
}
