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

    if(feedConfig != 'perfil') {

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

    setFeedConfig('perfil')
  }

  return (

    <div className="conteinerF">
    
      <Navbar onClickPerfil={clickPerfil} onClickConfig={clickConfig} expanded={expandedPerfil}/>

      <Perfilbar expanded={expandedPerfil} onClickPerfilbar={clickPerfil} onClickPerfilConfig={ClickPerfilConfig}/>

      <Feedbox config={feedConfig} onClickClose={clickClose} />

      <Communitybar/>

    </div> 
  );
}
