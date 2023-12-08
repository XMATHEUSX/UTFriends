import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaImage } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { LuSendHorizonal } from "react-icons/lu";

import TextareaAutosize from "react-textarea-autosize";

import React, { useRef, useState } from "react";

import Publication from "../Publication";
import Search from "../Search";
import "./feedbox.css";

export default function Feedbox(props) {
  /* Declarações para a configuração 'Home' do Feed */

  // Declarações das constantes basícas:

  const [newPublicationText, setNewPublicationText] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Declarações das funções básicas:

  // Declaração das constantes com funções:

  const sendNewPublication = () => {
    alert("Nova Publicação");

    document.getElementById("postText").value = "";
    setNewPublicationText("");
    setPostImage(null);
  };

  const newImagePost = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataUrl = e.target.result;

        const img = new Image();
        img.src = imageDataUrl;

        img.onload = () => {
          const maxWidth = 720;
          const maxHeight = 720;

          const originalWidth = img.width;
          const originalHeight = img.height;

          let newWidth, newHeight;

          if (originalWidth > originalHeight) {
            newWidth = maxWidth;
            newHeight = (originalHeight / originalWidth) * maxWidth;
          } else {
            newHeight = maxHeight;
            newWidth = (originalWidth / originalHeight) * maxHeight;
          }

          const canvas = document.createElement("canvas");
          canvas.width = newWidth;
          canvas.height = newHeight;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          const resizedImage = canvas.toDataURL("image/png");

          setPostImage(resizedImage);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const imageRef = useRef(null);
  const imageUpload = () => {
    imageRef.current.click();
  };

  const Publications = [];
  var feedSize = props.feed.length;
  for (let i = 0; i < feedSize; i++) {
    Publications.push(props.feed[i]);
  }

  /* Declarações para a configuração 'Search' do Feed */

  // Declaração das constantes com funções

  const Perfils = [];
  var profilesSize = props.profiles.length;
  for (let i = 0; i < profilesSize; i++) {
    Perfils.push(props.profiles[i]);
  }

  /* Declarações para a configuração 'SearchPerfil' do Feed */

  // Declaração das constantes com funções

  const SearchPublications = [
    {
      tipo_pensamento: 1,
      seguindo_nickname: "kaszuba",
      curtiu: true,
      curtidas: "10",
      ds_pensamento: "teste0",
    },
    {
      tipo_pensamento: 1,
      seguindo_nickname: "kaszuba",
      curtiu: true,
      curtidas: "10",
      ds_pensamento: "teste1",
    },
    {
      tipo_pensamento: 1,
      seguindo_nickname: "kaszuba",
      curtiu: true,
      curtidas: "10",
      ds_pensamento: "teste0",
    },
    {
      tipo_pensamento: 1,
      seguindo_nickname: "kaszuba",
      curtiu: true,
      curtidas: "10",
      ds_pensamento: "teste1",
    },
  ];

  /* Configurações de exibição do Feed */
  if (props.config == "home") {
    return (
      <div className="conteinerFB" style={{ justifyContent: "space-between" }}>
        <div className="feedConteinerFB">
          {Object.keys(Publications).map((index) => (
            <Publication
              key={index}
              type={Publications[index].tipo_pensamento}
              user={Publications[index].seguindo_nickname}
              liked={Publications[index].curtiu}
              like={Publications[index].curtidas}
              text={Publications[index].ds_pensamento}
              meu_id={Publications[index].meu_id}
              pensamento_id={Publications[index].pensamento_id}
              nickname={Publications[index].nickname}
            />
          ))}
        </div>

        <div className="feedBottomFB">
          <div className="newPublicationFB">
            <TextareaAutosize
              id="postText"
              maxLength={256}
              className="newPublicationTextFB"
              minRows={2}
              maxRows={5}
              placeholder="Exponha seus pensamentos aqui..."
              onChange={(e) => setNewPublicationText(e.target.value)}
            />

            <div className="textLimitFB">
              <p>{newPublicationText.length + " / 256"}</p>
            </div>
          </div>

          {postImage ? (
            <div
              className="feedImageFB"
              style={{ maxHeight: 380, maxWidth: "97%" }}
            >
              <img
                src={postImage}
                alt="Img"
                onClick={imageUpload}
                style={{ maxHeight: 400, maxWidth: "100%" }}
              />
            </div>
          ) : null}

          <div className="feedPublicationFB">
            <div className="feedIconFB">
              <FaImage
                size={28}
                color="white"
                cursor={"pointer"}
                onClick={imageUpload}
              />

              <input
                type="file"
                ref={imageRef}
                onChange={newImagePost}
                style={{ display: "none" }}
              />
            </div>

            <LuSendHorizonal
              className="sendIconFB"
              size={34}
              color="black"
              onClick={sendNewPublication}
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.config == "search") {
    return (
      <div className="conteinerFB" style={{ justifyContent: "space-between" }}>
        <div className="feedConteinerFB">
          {Object.keys(Perfils).map((index) => (
            <Search
              key={index}
              bio={Perfils[index].biografia}
              nickname={Perfils[index].nickname}
              follow={false}
              onClickPerfil={props.onClickPerfilSearch}
            />
          ))}
        </div>
      </div>
    );
  } else if (props.config == "searchPerfil") {
    return (
      <div className="conteinerFB">
        <div className="perfilConteinerFB">
          <div className="headerFB">
            <FiArrowLeft
              onClick={props.onClickSearch}
              className="returnIconFB"
              cursor={"pointer"}
            />

            <p>{"@" + props.nickname}</p>
          </div>

          <div className="imagemCapaFB">
            <div className="imagemFotoFB"></div>
          </div>

          <div className="topContentFB">
            <div className="infoFollowFB">
              <div className="followFB">
                <p>{props.followers ? props.followers : "0"}</p>
                <p>{"Seguidores"}</p>
              </div>

              <div className="followFB">
                <p>{props.following ? props.following : "0"}</p>
                <p>{"Seguindo"}</p>
              </div>

              <div className="followFB">
                <p>{props.pensamentos ? props.pensamentos : "0"}</p>
                <p>{"Pensamentos"}</p>
              </div>
            </div>

            <div className="buttonsFB"></div>
          </div>

          <div className="midContentFB">
            <div className="infoExtraFB">
              <p style={{ fontWeight: "bold" }}>Curso:</p>
              <p>{props.curso}</p>
            </div>

            <div className="biografiaFB">
              <p>
                <BiSolidQuoteAltLeft size={15} />

                {" " + props.bio + " "}

                <BiSolidQuoteAltRight size={15} />
              </p>
            </div>
          </div>

          <div className="feedFB">
            {Object.keys(SearchPublications).map((index) => (
              <Publication
                key={index}
                type={SearchPublications[index].tipo_pensamento}
                user={SearchPublications[index].seguindo_nickname}
                liked={SearchPublications[index].curtiu}
                like={SearchPublications[index].curtidas}
                text={SearchPublications[index].ds_pensamento}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
