import { FiArrowLeft } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import { FaImage } from 'react-icons/fa6'
import { LuSendHorizonal } from 'react-icons/lu'

import TextareaAutosize from 'react-textarea-autosize'

import React, { useState, useRef, useEffect } from "react";

import Publication from '../Publication';
import UTFriends from '/src/assets/images/UTFriends.png'
import './feedbox.css'

export default function Feedbox(props) {

    /* Declarações para a configuração 'PerfilConfig' do Feed  */

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

    const updateProfile = () => {
        updateData = {
            capa: imagemCapa,
            imgP: imagemPerfil,
            nick: apelido,
            bio: biografia
        }

        if(!/^[a-z]+$/.test(updateData.nick)){
            document.getElementById("errorApelido").style.display = "block";
        }
        else {

            fetch("http://localhost:3000/api/v1/profile/updateProfile", {
      
              method: "POST",
              headers: { "Content-Type": "application/json",},
              body: JSON.stringify(updateData),
      
            })
      
              .then((response) => response.json())
              .then((data) => {
                
                console.log(data);
              
                if (data.success) {
                  
                  setSucesso(true);
                  setDisplay(true);
      
                } else if (!data.success) {
                  
                  setSucesso(false);
                  setDisplay(true);
                }
      
              })
              .catch((error) => {console.error("Erro:", error);});
          }
          
    }

    const capaRef = useRef(null)
    const perfilRef = useRef(null)

    const CapaUpload = () => { capaRef.current.click() }
    const PerfilUpload = () => { perfilRef.current.click() }

    /* Declarações para a configuração 'Home' do Feed */

    const [newPublicationText, setNewPublicationText] = useState('')
    const [forFriends, setForFriends] = useState(false)
    const [postImage, setPostImage] = useState(null)

    function ChangeForFriends() { setForFriends(!forFriends) }

    const sendNewPublication = () => {

        alert('Nova Publicação')

        document.getElementById('postText').value = ''
        setNewPublicationText('')
        setPostImage(null)
    }

    const newImagePost = (e) => {

        const file = e.target.files[0];

        if (file) {

          const reader = new FileReader();
    
          reader.onload = (e) => {

            const imageDataUrl = e.target.result;
            setPostImage(imageDataUrl);

          };
    
          reader.readAsDataURL(file);
        }
    };

    const imageRef = useRef(null)
    const imageUpload = () => { imageRef.current.click() }

    
    /* Configurações de exibição do Feed */

    if ( props.config == 'home' ) {

        return(

            <div className="conteinerFB" style={{justifyContent: 'space-between'}}>

                <div className='feedConteinerFB'>

                    <Publication 
                        type={1} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999} 
                        text={'Esse é um texte para verificar a disposição dos textos em uma publicação do tipo 1 (apenas texto)'}
                    />

                    <Publication 
                        type={2} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999} 
                    />

                    <Publication 
                        type={3} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999}
                        text={'Esse é um texte para verificar a disposição dos textos em uma publicação do tipo 3 (texto e imagem)'} 
                    />

                    <Publication 
                        type={1} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999} 
                        text={'Esse é um texte para verificar a disposição dos textos em uma publicação do tipo 1 (apenas texto)'}
                    />

                    <Publication 
                        type={2} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999} 
                    />

                    <Publication 
                        type={3} 
                        user={'Kaszuba'} 
                        liked={false} 
                        like={999999}
                        text={'Esse é um texte para verificar a disposição dos textos em uma publicação do tipo 3 (texto e imagem)'} 
                    />
                </div>
                    
                <div className='feedBottomFB'>
                    
                    <div className='newPublicationFB'>

                        <TextareaAutosize
                            id='postText'
                            maxLength={256}
                            className='newPublicationTextFB'
                            minRows={2} 
                            maxRows={5}
                            placeholder='Exponha seus pensamentos aqui...'
                            onChange={(e) => setNewPublicationText(e.target.value)}
                        />

                        <div className='textLimitFB'>

                            <p>{newPublicationText.length + " / 256"}</p>

                        </div>
                    </div>

                    {postImage ? 
                        <div className='feedImageFB'>

                            <img 
                                src={postImage}
                                alt="Img" 
                                style={{ maxWidth: '100%' }}
                                onClick={imageUpload}
                            />

                        </div> 
                        : 
                        null
                    }

                    <div className='feedPublicationFB'>

                        <div className='feedIconFB'>

                            <FaImage
                                size={28}
                                color='white'
                                cursor={'pointer'}
                                onClick={imageUpload}
                            />

                            <input 
                                type='file' 
                                ref={imageRef}
                                onChange={newImagePost}
                                style={{display: 'none'}}
                            />

                        </div>

                        {forFriends ? 
                            <button 
                                onClick={ChangeForFriends} 
                                style={{backgroundColor: '#000', color: '#FFF', borderColor: '#000'}}>
                                    For Friends
                            </button>
                            : 
                            <button 
                                onClick={ChangeForFriends}>
                                    For Friends
                            </button>
                        }

                        <LuSendHorizonal
                            className='sendIconFB'
                            size={34}
                            color='black'
                            onClick={sendNewPublication}
                            cursor={'pointer'}
                        />

                    </div>
                </div>
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
                                value={props.nickname}
                                maxLength={12}
                                onChange={(e) => setApelido(e.target.value)}
                            />
                            
                            <p className="errorMsgSU" id="errorApelido"> Apenas letras minúsculas </p>

                        </div> 
                    </div>

                    <div className="changeBiographyFB">

                        <div className='titleBiographyFB'>

                            <p>Alterar Biografia</p>

                        </div>

                        <div className='contentBiographyFB'>                      

                            <input
                                type='code'
                                value={props.biografia}
                                maxLength={256}
                                onChange={(e) => setBiografia(e.target.value)}
                            />

                        </div> 
                    </div>

                    <div className='bottomContentFB'>

                        <button className='saveButtonFB' onClick={updateProfile}> Salvar Alterações </button>

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