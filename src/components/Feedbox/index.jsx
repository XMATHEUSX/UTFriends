import { FiArrowLeft } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import React, { useState, useRef } from "react";
import SelectClass from '../SelectClass';
import './feedbox.css'

export default function Feedbox(props) {

    const [imagemCapa, setImageCapa] = useState(null)
    const [imagemPerfil, setImagePerfil] = useState(null)

    const [apelido, setApelido] = useState(props.nickname)
    const [biografia, setBiografia] = useState(props.biografia)

    const TrocaImagemCapa = (e) => {

        const file = e.target.files[0];

        if (file) {

          const reader = new FileReader();
    
          reader.onload = (e) => {

            const imageDataUrl = e.target.result;
            setImageCapa(imageDataUrl);

          };
    
          reader.readAsDataURL(file);
        }
    };

    const TrocaImagemPerfil = (e) => {

        const file = e.target.files[0];

        if (file) {

          const reader = new FileReader();
    
          reader.onload = (e) => {

            const imageDataUrl = e.target.result;
            setImagePerfil(imageDataUrl);

          };
    
          reader.readAsDataURL(file);
        }
    };

    const capaRef = useRef(null)
    const perfilRef = useRef(null)

    const CapaUpload = () => { capaRef.current.click(); };

    const PerfilUpload = () => { perfilRef.current.click(); };

    if ( props.config == 'home' ) {

        return(

            <div className="conteinerFB">
    
                <h1> Feed </h1>
    
            </div>
        )

    }else if ( props.config == 'config') {

        return(

            <div className="conteinerFB">
    
                <h1> Config </h1>

                <button onClick={props.onClickClose}> Fechar </button>
    
            </div>
        )

    }else if ( props.config == 'community' ) {

        return(

            <div className="conteinerFB">
    
                <h1> Community </h1>
    
            </div>
        )

    }else if ( props.config == 'perfilConfig' ) {

        return(

            <div className="conteinerFB">

                <div className="perfilConfigContentFB">

                    <div className="headerFB">
        
                        <FiArrowLeft
                            onClick={props.onClickClose} 
                            className="closeIconFB"
                            cursor={"pointer"}
                        />

                        <p> Configurações do Perfil </p>

                    </div>

                    <div className="imagemCapaFB">

                        <div className="imagemPerfilFB">

                            {imagemPerfil ? "" : <div className='uploadPerfilFB' onClick={PerfilUpload}>Editar Foto</div>}

                            {imagemPerfil && 
                                (<img 
                                    className="imgFB" 
                                    src={imagemPerfil} 
                                    alt="Selected" 
                                    style={{ maxWidth: '100%' }} 
                                    onClick={PerfilUpload}
                                />)
                            }

                            <input 
                                type='file' 
                                ref={perfilRef} 
                                onChange={TrocaImagemPerfil} 
                                style={{display: 'none'}}
                            />

                        </div>

                        {imagemCapa ? "" : <div className='uploadCapaFB' onClick={CapaUpload}>Editar Capa</div>}

                        {imagemCapa && 
                            (<img 
                                className="imgFB" 
                                src={imagemCapa} 
                                alt="Selected" 
                                style={{ maxWidth: '100%' }} 
                                onClick={CapaUpload}
                            />)
                        }

                        <input 
                            type='file' 
                            ref={capaRef} 
                            onChange={TrocaImagemCapa} 
                            style={{display: 'none'}}
                        />

                    </div>
                    
                    <div className="changeNicknameFB">

                        <div className='titleNicknameFB'>

                            <p>Alterar Nickname</p>

                        </div>

                        <div className='contentNicknameFB'>                      

                            <input
                                type='code'
                                value={apelido}
                                maxLength={12}
                                onChange={(e) => setApelido(e.target.value)}
                            />

                        </div> 
                    </div>

                    <div className="changeBiographyFB">

                        <div className='titleBiographyFB'>

                            <p>Alterar Biografia</p>

                        </div>

                        <div className='contentBiographyFB'>                      

                            <input
                                type='code'
                                value={biografia}
                                maxLength={256}
                                onChange={(e) => setBiografia(e.target.value)}
                            />

                        </div> 
                    </div>

                    <div className='bottomContentFB'>

                        <button className='saveButtonFB' onClick={props.onClickClose}> Salvar Alterações </button>

                    </div>
                </div>
            </div>
        )

    }else if( props.config == 'perfil' ) {

        return(

            <div className="conteinerFB">
    
                <div className="perfilContentFB">

                    <div className="imagemCapaFB">

                        <div className="imagemPerfilFB">

                            {imagemPerfil && 
                                (<img 
                                    className="imgFB" 
                                    src={imagemPerfil} 
                                    alt="Selected" 
                                    style={{ maxWidth: '100%' }}
                                    onClick={PerfilUpload}
                                />)}

                        </div>

                        {imagemCapa && 
                            (<img 
                                className="imgFB" 
                                src={imagemCapa} 
                                alt="Selected" 
                                style={{ maxWidth: '100%' }} 
                                onClick={CapaUpload}
                            />)}

                    </div>

                    <div className="topContentFB">

                        <div className="infoBasicaFB">

                            <p className="nicknameFB">{"@" + props.nickname}</p>

                        </div> 

                        <div className='followInfoFB'>

                            <div className="followsFB">
                            
                                <p>{props.followers}</p>
                                <p>{"Segidores"}</p>

                            </div>

                            <div className='followsFB'>

                                <p>{props.following}</p>
                                <p>{"Seguindo"}</p>

                            </div>

                            <div className='followsFB'>

                                <p>{0}</p>
                                <p>{"Postagens"}</p>

                            </div>
                        </div>

                        <div className='editIconFB'>

                            <FaEdit  
                                onClick={props.onClickPerfilConfig} 
                                size={30}
                                cursor={'pointer'}
                            />
                        </div>

                    </div>

                    <div className="midleContentFB">

                        <div className='infoExtraFB'>

                            <p>Curso: Engenharia de Computação</p>
                            
                            <p>Tags: #Criador</p>

                        </div>

                        <div className="descricaoFB">
                            
                            <p>{"\"" + props.bio + "\""}</p>

                        </div>
                    </div>

                    <div className="feedPessoalFB">

                        <p>MINHAS PUBLICAÇÕES</p>

                    </div>
                </div>
            </div>
        )
    }
}