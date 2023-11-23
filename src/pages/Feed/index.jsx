import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Communitybox from "../../components/Communitybox";
import Configbox from "../../components/Configbox";
import Feedbox from "../../components/Feedbox";
import Menubar from "../../components/Menubar";
import Perfilbox from "../../components/Perfilbox";
import "./feed.css";

var Executada = false;

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
  const [curso, setCurso] = useState("");
  const [feed, setFeed] = useState([{}]);

  const [feedConfig, setFeedConfig] = useState("home");
  const [menu, setMenu] = useState(false);
  var token = localStorage.getItem("token");

  const [busca, setBusca] = useState("");

  const [perfil, setPerfil] = useState(false);
  const [config, setConfig] = useState(false);
  const [community, setCommunity] = useState(false);
  const [home, setHome] = useState(true);

  if (token) {
  } else {
    //Todo Melhorar o modo que retornar para a pagina principal
    exit();
  }

  const userData = {
    token: token,
  };
  //Esta fazendo duas requisiçoes ainda
  if (!Executada) {
    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/user", {
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
          setCurso(data.dados.nm_curso);
          Executada = true;
        } else if (!data.success) {
          exit();
        }
      });

    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/feed/exibirfeed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        if (data.feed) {
          console.log(data.feed);
          setFeed(data.feed);
        }
      });
  }

  function clickClose() {

    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);

    setFeedConfig("home");
  }

  function clickConfig() {

    setConfig(true);
    setPerfil(false);
    setCommunity(false);
    setHome(false);

    setFeedConfig("config");
  }

  function clickPerfil() {

    setConfig(false);
    setPerfil(true);
    setCommunity(false);
    setHome(false);

    setFeedConfig("perfil");
  }

  function clickCommunity() {

    setConfig(false);
    setPerfil(false);
    setCommunity(true);
    setHome(false);

    setFeedConfig("community");
  }

  function ClickPerfilConfig() {

    setConfig(false);
    setPerfil(true);
    setCommunity(false);
    setHome(false);

    setFeedConfig("perfilconfig");
  }

  function clickSearch() {

    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);

    setFeedConfig("search");
  }

  function clickPerfilSearch() {

    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);

    setFeedConfig("searchPerfil");
  }

  function ClickMenu() {
    setMenu(!menu);
  }

  function Exit() {
    exit();
  }

  return (
    <div className="conteinerF">
      <div className="topContentF">
        <div className={`${menu ? "firstBarF-Expanded" : "firstBarF"}`}>
          {menu ? (
            <AiOutlineMenuFold
              onClick={ClickMenu}
              cursor={"pointer"}
              size={35}
            />
          ) : (
            <AiOutlineMenuUnfold
              onClick={ClickMenu}
              cursor={"pointer"}
              size={35}
            />
          )}
        </div>

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
            <IoSearch
              size={26}
              cursor={"pointer"}
              color={"white"}
              onClick={clickSearch}
            />
          </div>
        </div>

        <div className="lastBarF">
          <RiLogoutBoxLine size={35} cursor={"pointer"} onClick={Exit} />
        </div>
      </div>

      <Menubar
        onClickHome={clickClose}
        onClickPerfil={clickPerfil}
        onClickConfig={clickConfig}
        onClickCommunity={clickCommunity}
        menu={menu}
      />

      { perfil ? 
      (<Perfilbox
        config={feedConfig}
        nickname={nickname}
        followers={followers}
        following={following}
        pensamentos={pensamentos}
        bio={bio}
        curso={curso}
        onClickClose={clickClose}
        onClickPerfil={clickPerfil}
        onClickPerfilConfig={ClickPerfilConfig}
      />) : null }

      {home ? 
      (<Feedbox
        config={feedConfig}
        feed={feed}
        onClickSearch={clickSearch}
        onClickPerfilSearch={clickPerfilSearch}
      />) : null }

      {config ? 
      (<Configbox
        config={feedConfig}
        onClickClose={clickClose}
      />) : null}

      {community ?
      (<Communitybox
        config={feedConfig}
        onClickClose={clickClose}
      />) : null}

    </div>
  );
}
