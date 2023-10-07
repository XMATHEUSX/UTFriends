import Navbar from '../../components/Navbar'
import Feedbox from '../../components/Feedbox'
import Perfilbar from '../../components/Perfilbar';
import Communitybar from '../../components/Communitybar';
import './feed.css'

export default function Feed() {

  function clickPerfil() {

    alert("Você clicou no perfil")
  }

  function clickConfig() {

    alert("Você clicou nas configurações")
  }

  return (

    <div className="conteinerF">
    
      <Navbar onClickPerfil={clickPerfil} onClickConfig={clickConfig}/>

      <Perfilbar onDragPerfilbox/>

      <Feedbox/>

      <Communitybar/>

    </div> 
  );
}
