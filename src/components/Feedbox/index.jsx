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

  // Declaração das constantes com funções:

  const Perfils = [

    {bio:"Teste0", nickname: "kaszuba", follow: false},
    {bio:"Teste1", nickname: "kaszuba", follow: true},
    {bio:"Teste2", nickname: "kaszuba", follow: false},
    {bio:"Teste3", nickname: "kaszuba", follow: true},
    {bio:"Teste4", nickname: "kaszuba", follow: false},
    {bio:"Teste5", nickname: "kaszuba", follow: true},
    {bio:"Teste6", nickname: "kaszuba", follow: false},
    {bio:"Teste7", nickname: "kaszuba", follow: true},
    {bio:"Teste8", nickname: "kaszuba", follow: false},
    {bio:"Teste9", nickname: "kaszuba", follow: true},
  ]

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
              bio={Perfils[index].bio}
              nickname={Perfils[index].nickname}
              follow={Perfils[index].follow}
            />

          ))}

        </div>
      </div>
    )

  } else if (props.config == "searchPerfil") {

    return (

      <div className="conteinerFB">

      </div>
    )
  }
}
