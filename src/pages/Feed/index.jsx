import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Communitybar from "../../components/Communitybar";
import Feedbox from "../../components/Feedbox";
import Perfilbar from "../../components/Perfilbar";
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

  function ClickSearch() {
    setFeedConfig("search");
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
              onClick={ClickSearch}
            />
          </div>
        </div>

        <div className="lastBarF">
          <RiLogoutBoxLine size={35} cursor={"pointer"} onClick={Exit} />
        </div>
      </div>

      <Perfilbar
        onClickHome={clickClose}
        onClickPerfil={clickPerfil}
        onClickConfig={clickConfig}
        onClickCommunity={clickCommunity}
        menu={menu}
      />

      <Feedbox
        config={feedConfig}
        nickname={nickname}
        followers={followers}
        following={following}
        pensamentos={pensamentos}
        bio={bio}
        feed={feed}
        curso={curso}
        onClickClose={clickPerfil}
        onClickPerfilConfig={ClickPerfilConfig}
      />

      <Communitybar />
    </div>
  );
}
