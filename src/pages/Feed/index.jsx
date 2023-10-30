import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Communitybar from "../../components/Communitybar";
import Feedbox from "../../components/Feedbox";
import Perfilbar from "../../components/Perfilbar";
import "./feed.css";

export default function Feed() {
  const navigate = useNavigate();

  function exit() {
    navigate("/signin");
  }

  const [bio, setBio] = useState("");
  const [nickname, setNickname] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [pensamentos, setPensamentos] = useState("");
  const [feedConfig, setFeedConfig] = useState("home");
  var token = localStorage.getItem("token");

  const [busca, setBusca] = useState("");

  if (token) {
  } else {
    //Todo Melhorar o modo que retornar para a pagina principal
    exit();
  }

  const userData = {
    token: token,
  };

  fetch("http://localhost:3000/api/v1/profile/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      JSON.stringify(data.dados);
      if (data.success) {
        console.log(data.dados);
        setNickname(data.dados.nickname);
        setBio(data.dados.biografia);
        setFollowers(data.dados.seguidores);
        setFollowing(data.dados.seguindo);
        setPensamentos(data.dados.pensamentos);
      } else if (!data.success) {
        exit();
      }
    });

  function clickClose() {
    setFeedConfig("home");
  }

  function clickConfig() {
    setFeedConfig("config");
  }

  function clickPerfil() {
    setFeedConfig("perfil");
  }

  function clickCommunity() {
    setFeedConfig("community");
  }

  function ClickPerfilConfig() {
    setFeedConfig("perfilConfig");
  }

  return (
    <div className="conteinerF">
      <div className="topContentF">
        <div className="centerBarF">
          <div className="searchBoxF">
            <input
              title="SearchBox"
              id="SearchBox"
              type="text"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="searchIconF">
            <IoSearch size={26} cursor={"pointer"} color={"white"} />
          </div>
        </div>
      </div>

      <Perfilbar
        onClickHome={clickClose}
        onClickPerfil={clickPerfil}
        onClickConfig={clickConfig}
        onClickCommunity={clickCommunity}
      />

      <Feedbox
        config={feedConfig}
        nickname={nickname}
        followers={followers}
        following={following}
        pensamentos={pensamentos}
        bio={bio}
        onClickClose={clickPerfil}
        onClickPerfilConfig={ClickPerfilConfig}
      />

      <Communitybar />
    </div>
  );
}
