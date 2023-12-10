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

var executada = false;

export default function Feed() {
  const navigate = useNavigate();

  function exit() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  const [bio, setBio] = useState("");
  const [nickname, setNickname] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [pensamentos, setPensamentos] = useState("");
  const [curso, setCurso] = useState("");
  const [feed, setFeed] = useState([{}]);
  const [profiles, setProfiles] = useState([{}]);

  const [feedConfig, setFeedConfig] = useState("home");
  const [menu, setMenu] = useState(false);
  var token = localStorage.getItem("token");

  const [busca, setBusca] = useState("");

  const [perfil, setPerfil] = useState(false);
  const [config, setConfig] = useState(false);
  const [community, setCommunity] = useState(false);
  const [home, setHome] = useState(true);

  if (!token) {
    exit();
  }

  if (!executada) {
    const userData = {
      token: token,
    };

    console.log("User Data: " + userData.token);
    fetch("http://localhost:3000/api/v1/profile/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data.dados);
        if (data.success) {
          // console.log(data.dados);
          setNickname(data.dados.nickname);
          setBio(data.dados.biografia);
          setFollowers(data.dados.seguidores);
          setFollowing(data.dados.seguindo);
          setPensamentos(data.dados.pensamentos);
          setCurso(data.dados.nm_curso);
          executada = true;
        } else if (!data.success) {
          exit();
        }
      });

    fetch("http://localhost:3000/api/v1/feed/exibirfeed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        if (data.feed) {
          // console.log(data.feed);
          setFeed(data.feed);
        }
      });
  }

  function deleteAccount() {
    const userData = {
      token: token,
    };

    fetch("http://localhost:3000/api/v1/profile/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        if (data.success) {
          alert("Conta Deletada");
          Exit();
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
    const userData = {
      busca: busca,
    };

    const verifyData = {
      busca: false,
    };

    if (userData.busca != "") {
      verifyData.busca = true;
    }

    const validacao = Object.values(verifyData).every(
      (value) => value === true
    );

    if (validacao) {
      fetch("http://localhost:3000/api/v1/feed/searchProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          JSON.stringify(data);
          setProfiles(data.profiles);
        });

      setConfig(false);
      setPerfil(false);
      setCommunity(false);
      setHome(true);
      setFeedConfig("search");
    }
  }

  function clickPerfilSearch() {
    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);
    alert(nickname);
    setFeedConfig("searchPerfil");
  }

  function ClickMenu() {
    setMenu(!menu);
  }

  function Exit() {
    exit();
  }

  const enterCapture = (e) => {
    if (e.key === "Enter") {
      clickSearch();
    }
  };

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
              onKeyDown={enterCapture}
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

      {perfil ? (
        <Perfilbox
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
        />
      ) : null}

      {home ? (
        <Feedbox
          config={feedConfig}
          nickname={nickname}
          user_id={token}
          feed={feed}
          profiles={profiles}
          onClickSearch={clickSearch}
          onClickPerfilSearch={clickPerfilSearch}
        />
      ) : null}

      {config ? (
        <Configbox
          config={feedConfig}
          onClickClose={clickClose}
          onClickDelete={deleteAccount}
        />
      ) : null}

      {community ? (
        <Communitybox config={feedConfig} onClickClose={clickClose} />
      ) : null}
    </div>
  );
}
