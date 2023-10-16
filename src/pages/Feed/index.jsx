import Navbar from '../../components/Navbar'
import Feedbox from '../../components/Feedbox'
import Perfilbar from '../../components/Perfilbar';
import Communitybar from '../../components/Communitybar';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './feed.css'



export default function Feed() {

  const navigate = useNavigate();

function exit() { navigate('/signin') }

  const [bio, setBio] = useState("");
  const [nickname, setNickname] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [expandedPerfil, setExpandedPerfil] = useState(false);
  const [feedConfig, setFeedConfig] = useState('default')
  var token = localStorage.getItem('token');
  
  if (token) {
  }else{
    //Todo Melhorar o modo que retornar para a pagina principal  
    exit()
  }

  const userData = {
    token: token,
  };


  fetch("http://localhost:3000/api/v1/profile/user", {

      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {  
        JSON.stringify(data.dados);
        if (data.success) {
          setNickname(data.dados.nickname)
          setBio(data.dados.biografia)
          setFollowers(data.dados.seguidores)
          setFollowing(data.dados.seguindo)          
        } else if (!data.success) {
          exit()
        }
      })


  function clickPerfil() {
    if(feedConfig != 'perfilConfig') {
      setExpandedPerfil(!expandedPerfil);
    }
  }

  function clickClose() {

    setFeedConfig('default')
  }

  function clickConfig() {

    setFeedConfig('config')

  }

  function clickCommunity() {

    setFeedConfig('community')
  }

  function ClickPerfilConfig() {

    setFeedConfig('perfilConfig')
  }

  return (
    <div className="conteinerF">
    
      <Navbar onClickPerfil={clickPerfil} onClickConfig={clickConfig} expanded={expandedPerfil}/>

      <Perfilbar 
        expanded={expandedPerfil} 
        onClickPerfilbar={clickPerfil} 
        onClickPerfilConfig={ClickPerfilConfig} 
        nickname ={nickname}
        followers={followers}
        following={following}
        bio = {bio}
      />

      <Feedbox config={feedConfig} onClickClose={clickClose} />

      <Communitybar/>

    </div> 
  );
}
