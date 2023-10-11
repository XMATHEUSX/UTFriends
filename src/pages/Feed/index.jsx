import Navbar from '../../components/Navbar'
import Feedbox from '../../components/Feedbox'
import Perfilbar from '../../components/Perfilbar';
import Communitybar from '../../components/Communitybar';
import React, { useState } from 'react';
import './feed.css'

export default function Feed() {

  const [expandedPerfil, setExpandedPerfil] = useState(false);
  const [feedConfig, setFeedConfig] = useState('default')

  function clickPerfil() {

    setExpandedPerfil(!expandedPerfil);
  }

  function clickClose() {

    setFeedConfig('default')
    alert(feedConfig)
  }

  function clickConfig() {

    setFeedConfig('config')
  }

  function clickCommunity() {

    alert("Você clicou na comunidade")
    setFeedConfig('community')
  }

  return (

    <div className="conteinerF">
    
      <Navbar onClickPerfil={clickPerfil} onClickConfig={clickConfig}/>

      <Perfilbar expanded={ expandedPerfil }/>

      <Feedbox config={ feedConfig } onClickClose={clickClose} />

      <Communitybar/>

    </div> 
  );
}
