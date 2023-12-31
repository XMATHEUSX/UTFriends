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
  const [id, setId] = useState('');

  const [bioSearch, setBioSearch] = useState("");
  const [nicknameSearch, setNicknameSearch] = useState("");
  const [followersSearch, setFollowersSearch] = useState("");
  const [followingSearch, setFollowingSearch] = useState("");
  const [pensamentosSearch, setPensamentosSearch] = useState("");
  const [cursoSearch, setCursoSearch] = useState("");
  //const [FollowSearch, setFollowSearch] = useState("");


  const [MyPublications, setMyPublications] = useState([]);
  const [feedSearch, setFeedSearch] = useState([]);

  const [feed, setFeed] = useState([{}]);
  const [profiles, setProfiles] = useState([{}]);

  const [feedConfig, setFeedConfig] = useState("home");
  const [menu, setMenu] = useState(false);
  var token = localStorage.getItem("token");

  const [busca, setBusca] = useState("");
  const [buscaDone, setBuscaDone] = useState(false)

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

    //console.log("User Data: " + userData.token);
    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data.dados);
        if (data.success) {
          //console.log(data.dados);
          setId(data.dados.user_id)
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

    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/feed/exibirfeed", {
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

    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        if (data.success) {
          //alert("Conta Deletada");
          Exit();
        }
      });
  }

  const requestMeusPensamentos = async () => {

    var token = localStorage.getItem("token");
    const userData = {token: token,};

    try {
      const response = await fetch(
        "https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/exibirmeuspensamentos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMyPublications(data.pensamentos);
      } else {
        setMyPublications([]);
      }
      
    } catch (error) {
      console.log("Error:", error);
    }
  };

  function clickClose() {
    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);

    setBuscaDone(false);
    document.getElementById('SearchBox').value = ''
    setBusca('')

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

    requestMeusPensamentos();

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

    setBuscaDone(true);

    const userData = {
      busca: busca,
      token: token,
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
      fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/feed/searchProfile", {
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

  const clickFollow = (nicknamefollowed,follow) => {
    const userData = {
      nicknameFollower: nickname,
      nicknameFollowed: nicknamefollowed,
      follow: !follow,
    };
  fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/followUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        console.log(data)
      });
  }

  const clickPerfilSearch = (nickname) => {

    setConfig(false);
    setPerfil(false);
    setCommunity(false);
    setHome(true);

    const userData = {
      nickname: nickname,
    };
    fetch("https://server-utf-615d5a0cc2dd.herokuapp.com/api/v1/profile/usersearch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data.dados);
        if (data.success) {
          console.log(data.dados.pensamentos)
          setNicknameSearch(nickname)
          setBioSearch(data.dados.perfil.biografia);
          setFollowersSearch(data.dados.perfil.seguidores);
          setFollowingSearch(data.dados.perfil.seguindo);
          setPensamentosSearch(data.dados.perfil.pensamentos);
          setCursoSearch(data.dados.perfil.nm_curso);
          setFeedSearch(data.dados.pensamentos);
          //setFollowSearch(data.dados.follow);
        } else if (!data.success) {
        }
      });
    
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
              style={{fontFamily: 'Roboto Mono'}}
              title="SearchBox"
              id="SearchBox"
              type="text"
              placeholder="Realize sua busca..."
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
          myPublications={MyPublications}
          onClickClose={clickClose}
          onClickPerfil={clickPerfil}
          onClickPerfilConfig={ClickPerfilConfig}
        />
      ) : null}

      {home ? (
        <Feedbox
          config={feedConfig}
          nickname={nickname}
          nicknamesearch={nicknameSearch}
          user_id={token}
          followers={followersSearch}
          following={followingSearch}
          pensamentos={pensamentosSearch}
          bio={bioSearch}
          curso={cursoSearch}
          feed={feed}
          id={id}
          //seguindo = {FollowSearch}
          profiles={profiles}
          busca={buscaDone}
          feedSearch={feedSearch}
          onClickClose={clickClose}
          onClickSearch={clickSearch}
          onClickNickname={clickPerfilSearch}
          onClickFollow={clickFollow}
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
