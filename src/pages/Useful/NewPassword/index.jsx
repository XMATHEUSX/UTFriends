import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

import UsefulBox from "../../../components/UsefulBox";
import './newpassword.css';

export default function Useful(props) {

    const [senha, setSenha] = useState('')
    const [senhaRep, setSenhaRep] = useState('')

    const [display, setDisplay] = useState(false);

    const navigate = useNavigate();

    // Obter a URL atual do navegador

        var urlActual = window.location.href;

    // Criar um objeto de URL

    var url = new URL(urlActual);

    var code = url.searchParams.get("code");

    const updatepassword = () => {
       
        const userData = {
          password: senha, 
          token: code,
        };

        const userVal = {
            password: false,
            passwordRep: false,
        }

        if (senha != '') {

            document.getElementById('noSenha').style.display = 'none'

            if (senha.length >= 8) {

                userVal.password = true;
                document.getElementById('erroSenha').style.display = 'none'

                if (senhaRep == senha) {

                    userVal.passwordRep = true;
                    document.getElementById('erroSenhaRep').style.display = 'none'

                } else {

                    document.getElementById('erroSenhaRep').style.display = 'block'
                }

            } else {

                document.getElementById('erroSenha').style.display = 'block'
            }

        } else {

            document.getElementById('noSenha').style.display = 'block'
            document.getElementById('erroSenha').style.display = 'none'
        }

        const validacao = Object.values(userVal).every(value => value === true);

        if(validacao) {
            fetch("http://localhost:3000/api/v1/profile/updatepassword", {
          
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(userData),
    
        })
            .then((response) => response.json())
            .then((data) => {
        
                console.log(data);
        
                if (data.success) {

                    setDisplay(true);

                } else if (!data.success) {
        
                }
            })
            .catch((error) => {console.error("Erro:", error);});
      };
    }

    function CloseIcon() { setDisplay(false); }

    function OpenLogin() { navigate('/signin') }
  
    function Success() {
      
      return ( 
  
        <UsefulBox 
          display={display}
          name={'Password_Changed'} 
          title={'Congratulations'}
          button={'Fazer Login'}
          message={'Sua senha foi alterada com sucesso, realize o login para acessar sua conta'}
          width={'25%'}
          height={'20%'} 
          onClickClose={CloseIcon} 
          onClickButton={OpenLogin}
        /> 
      ) 
    }

    return (

        <div className="conteinerNP">

            {Success()}

            <div className="boxNP">

                <div className="topBoxNP">

                    <p>New_Password</p>

                    <Link to={'/signin'}>
                        <AiFillCloseSquare
                            size={30}
                            className="closeIconNP"
                            cursor={'pointer'}
                        />
                    </Link>
                </div>

                <div className="contentBoxNP">

                    <p className="textBoxNP">Informe sua nova senha</p>

                    <input
                        title="Senha"
                        name="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <p className="errorMsgNP" id="noSenha"> Campo obrigatório </p>

                    <p className="errorMsgNP" id="erroSenha"> Senha fraca </p>

                </div>

                <div className="contentBoxNP">

                    <p className="textBoxNP">Repita sua nova senha</p>

                    <input
                        title="Repetir Senha"
                        name="Repetir Senha"
                        type="password"
                        value={senhaRep}
                        onChange={(e) => setSenhaRep(e.target.value)}
                    />

                    <p className="errorMsgNP" id="erroSenhaRep" > Senha divergente </p>

                </div>

                <div className="bottomBoxNP">

                    <button onClick={updatepassword} >Alterar Senha</button>

                </div>
            </div>
        </div>
    )
}