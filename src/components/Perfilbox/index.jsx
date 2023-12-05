import React, { useRef, useState } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

import TextareaAutosize from "react-textarea-autosize";
import Publication from "../Publication";
import SelectClass from "../SelectClass";
import UsefulBox from "../UsefulBox";
import "./perfilbox.css";

export default function Perfilbox(props) {

	/* Declaração das funções de perfil */

  // Declaração das constantes com função 

  const MyPublications = [

    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste0'},
    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste1'},
    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste0'},
    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste1'},
    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste0'},
    {tipo_pensamento: 1, seguindo_nickname: props.nickname, curtiu: true, curtidas: '10', ds_pensamento: 'teste1'},
  ]

	/* Declaração das funções de perfilconfig */

	// Declaração das constantes básicas:

	const [imagemCapa, setImageCapa] = useState(null);
  const [imagemPerfil, setImagePerfil] = useState(null);
  const [apelido, setApelido] = useState("");
  const [biografia, setBiografia] = useState("");
  const [cursoOb, setCursoOb] = useState("");
  const [cursoId, setCursoId] = useState("");

  const [sucesso, setSucesso] = useState(null);
  const [display, setDisplay] = useState(null);

	var token = localStorage.getItem("token");

  // Declaração das funções básicas:

  function cleanData() {

    setApelido("");
    setBiografia("");
    setCursoId(null);
    setCursoOb(null);
  }

  function displayOff() {

    setDisplay(false);
  }

  function displayClose() {

    displayOff();
    cleanData();
  }

  function clickClose() {

    displayOff();
    cleanData();
    window.location.reload();
  }

  const selecionarCurso = (options) => {

    setCursoOb(options);
    setCursoId(options.value);
  };

  function updateSuccess() {

    return (

      <UsefulBox
        display={display}
        width={"45%"}
        height={"20%"}
        name={"Update_Success"}
        title={"Data Updated"}
        message={"Seus dados foram atualizados com sucesso"}
        button={"Atualizar Página"}
        onClickClose={displayOff}
        onClickButton={clickClose}
      />
    );
  }

  function updateFailed() {

    return (

      <UsefulBox
        display={display}
        width={"45%"}
        height={"20%"}
        name={"Update_Failed"}
        title={"ERROR"}
        message={"Houve um erro ao atualizar seus dados"}
        button={"Tentar Novamente"}
        onClickClose={displayOff}
        onClickButton={displayClose}
      />
    );
  }

  // Declaração das constantes com funções:

  const Cursos = [

    {value: '1', label: 'Administração' },
    {value: '2', label: 'Agronomia' },
    {value: '3', label: 'Ciências Contábeis' },
    {value: '4', label: 'Engenharia Cartográfica e de Agrimensura' },
    {value: '5', label: 'Engenharia Civil' },
    {value: '6', label: 'Engenharia de Computação' },
    {value: '7', label: 'Engenharia Mecânica' },
    {value: '8', label: 'Licenciatura em Letras Português e Ingles' },
    {value: '9', label: 'Licenciatura em Matemática' },
    {value: '10', label: 'Química' },
    {value: '11', label: 'Tecnologia em Análise e Desenvolvimento de Sistemas' },
    {value: '12', label: 'Tecnologia em Manutenção Industrial' },
  ]

  const cursoUser = Cursos.find((curse) => curse.label === props.curso)

  const TrocaImagemCapa = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onload = (e) => {

        const imageDataUrl = e.target.result;

        const img = new Image();
        img.src = imageDataUrl;

        img.onload = () => {

          const maxWidth = 1080;
          const maxHeight = 720;

          const originalWidth = img.width;
          const originalHeight = img.height;

          let newWidth, newHeight;

          if (originalWidth > originalHeight) {

            newWidth = maxWidth;
            newHeight = (originalHeight / originalWidth) * maxWidth;

          } else {

            newHeight = maxHeight;
            newWidth = (originalWidth / originalHeight) * maxHeight;
          }

          const canvas = document.createElement("canvas");
          canvas.width = newWidth;
          canvas.height = newHeight;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

          const resizedImage = canvas.toDataURL("image/png");

          setImageCapa(resizedImage);
        };
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

        const img = new Image();
        img.src = imageDataUrl;

        img.onload = () => {

          const maxWidth = 720;
          const maxHeight = 720;

          const canvas = document.createElement("canvas");
          canvas.width = maxWidth;
          canvas.height = maxHeight;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

          const resizedImage = canvas.toDataURL("image/png");

          setImagePerfil(resizedImage);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const updateProfile = () => {

    const updateData = {
      capa: imagemCapa,
      imgP: imagemPerfil,
      nick: apelido,
      bio: biografia,
      curso: cursoId,
      token: token,
    };

    const DataVal = {
      nick: false,
      bio: false,
    };

    if (updateData.nick != '' || updateData.bio != '' || updateData.curso != '') {

      if (apelido == '') { updateData.nick = props.nickname }
      if (biografia == '') { updateData.bio = props.bio }
      if (cursoOb == '') { updateData.curso = cursoUser.value }
    
    }

    if (updateData.nick != "") {

      if (/^[a-z0-9]+$/.test(updateData.nick)) {

        document.getElementById("errorApelido").style.display = "none";
        DataVal.nick = true;

      } else { document.getElementById("errorApelido").style.display = "block"; }
    }

    if (updateData.bio != "") {

      if (/^.{10,}$/.test(updateData.bio)) {

        document.getElementById("errorBio").style.display = "none";
        DataVal.bio = true;

      } else { document.getElementById("errorBio").style.display = "block"; }
    }

    const validacao = Object.values(DataVal).every((value) => value === true);

    if (validacao) {

      fetch("http://localhost:3000/api/v1/profile/update", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })

        .then((response) => response.json())
        .then((data) => {

          if (data.success) {

            setSucesso(true);
            setDisplay(true);

          } else if (!data.success) {

            setSucesso(false);
            setDisplay(true);
          }
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
  };

  const capaRef = useRef(null);
  const perfilRef = useRef(null);

  const CapaUpload = () => {
    capaRef.current.click();
  };
  const PerfilUpload = () => {
    perfilRef.current.click();
  };

	/* Configurações de exibição */

	if (props.config == 'perfil') { // Exibição do perfil

		return (

			<div className="conteinerPerfilBox">

				<div className="capaPerfilBox">

					<div className="fotoPerfilBox">

						{imagemPerfil && (
							<img
								className="imagemPerfilBox"
								src={imagemPerfil}
								alt="Imagem de perfil"
								style={{ maxWidth: "100%" }}
							/>
						)}

					</div>

						{imagemCapa && (
							<img
								className="imagemPerfilBox"
								src={imagemCapa}
								alt="Imagem de capa"
								style={{ maxWidth: "100%" }}
							/>
						)}

				</div>

				<div className="topContentPerfilBox">

					<div className="infoBasicaPerfilBox">

						<p>{"@" + props.nickname}</p>

					</div>

					<div className="infoFollowPerfilBox">

						<div className="followPerfilBox">

							<p>{props.followers ? props.followers : "0"}</p>
							<p>{"Seguidores"}</p>

					</div>

						<div className="followPerfilBox">

							<p>{props.following ? props.following : "0"}</p>
							<p>{"Seguindo"}</p>

						</div>

						<div className="followPerfilBox">

							<p>{props.pensamentos ? props.pensamentos : "0"}</p>
							<p>{"Pensamentos"}</p>
								
						</div>
					</div>

					<div className="editIconPerfilBox">

						<FaEdit
							onClick={props.onClickPerfilConfig}
							size={30}
							cursor={"pointer"}
						/>

					</div>
				</div>

				<div className="midContentPerfilBox">

					<div className="infoExtraPerfilbox">

						<p style={{ fontWeight: "bold" }}>Curso:</p>
						<p>{props.curso}</p>

					</div>

					<div className="biograficaPerfilBox">
						
						<p> 
							<BiSolidQuoteAltLeft size={15} />

								{" " + props.bio + " "}

							<BiSolidQuoteAltRight size={15} />
						</p>

					</div>
				</div>

				<div className="feedConteinerPerfilBox">

          <div className="feedPerfilBox">

            {Object.keys(MyPublications).map((index) => (
              <Publication
                key={index}
                type={MyPublications[index].tipo_pensamento}
                user={MyPublications[index].seguindo_nickname}
                liked={MyPublications[index].curtiu}
                like={MyPublications[index].curtidas}
                text={MyPublications[index].ds_pensamento}
              />
            ))}

					</div>	
				</div>
			</div>
		)

	} else if (props.config == 'perfilconfig') { // Exibição das configurações do peril

			return ( 

				<div className="conteinerPerfilBox">

        	{sucesso ? updateSuccess() : updateFailed()}

					<div className="headerPerfilBox">
					
						<FiArrowLeft

							onClick={props.onClickPerfil}
							className="returnIconPerfilBox"
							cursor={"pointer"}

						/>

						<p> Configurações do Perfil </p>

					</div>

          <div className="capaPerfilBox">

            <div className="fotoPerfilBox">

              {imagemPerfil ? ("") : ( <div className="uploadFotoPerfilConfig" onClick={PerfilUpload}> Editar Foto </div> )}

              {imagemPerfil && (
                <img
                  className="imagemPerfilBox"
                  src={imagemPerfil}
                  alt="Imagem de perfil"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  onClick={PerfilUpload}
                />
              )}

              <input
                type="file"
                ref={perfilRef}
                onChange={TrocaImagemPerfil}
                style={{ display: "none" }}
              />

            </div>

            {imagemCapa ? ("") : ( <div className="uploadCapaPerfilConfig" onClick={CapaUpload}> Editar Capa</div> )}

            {imagemCapa && (
              <img
                className="imagemPerfilBox"
                src={imagemCapa}
                alt="Imagem de capa"
                style={{ maxWidth: "100%" }}
                onClick={CapaUpload}
              />
            )}

            <input
              type="file"
              ref={capaRef}
              onChange={TrocaImagemCapa}
              style={{ display: "none" }}
            />

          </div>

          <div className="inputApelidoPerfilBox">
						
            <div className="titleNicknamePerfilBox">

              <p>Alterar Nickname</p>

            </div>

            <div className="contentNicknamePerfilBox">

              <input
                type="code"
                value={apelido}
                placeholder={props.nickname}
                maxLength={12}
                onChange={(e) => setApelido(e.target.value)}
              />

            </div>
          </div>

          <div className="erroPerfilBox">

            <p className="erroMessageperfilBox" id="errorApelido"> {" "}Apenas minúsculas e números{" "} </p>

          </div>

          <div className="inputBiografiaPerfilBox">

            <div className="titleBiografiaPerfilBox">

              <p>Alterar Biografia</p>

            </div>

            <div className="contentBiografiaPerfilBox">

              <TextareaAutosize
                className="newBioPerfilBox"
                minRows={1}
                maxRows={5}
                value={biografia}
                placeholder={props.bio}
                maxLength={256}
                onChange={(e) => setBiografia(e.target.value)}
              />

            </div>
          </div>

          <div className="erroPerfilBox">

            <p className="erroMessageperfilBox" id="errorBio"> {" "}Mínimo de dez caracteres{" "} </p>

          </div>

          <SelectClass
            onChange={selecionarCurso}
            selectedValue={cursoOb}
            class={"selectSC-FB"}
          />

          <div className="botContentPerfilBox">

            <button className="saveButtonPerfilBox" onClick={updateProfile}> {" "}Salvar Alterações{" "} </button>

          </div>
        </div>
			)
	}
}