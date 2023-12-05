import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

import UsefulBox from "../../../components/UsefulBox";
import './emailvalidation.css';

export default function Useful(props) {

    const [email, setEmail] = useState('')
    const [display, setDisplay] = useState(false)

    const navigate = useNavigate();

    const forgetpassword = () => {

        const userData = {
          email: email,
        };
    
        const userVal = {
          email: false,
        }

        if (userData.email != '') {

            if (/^[a-zA-Z0-9._%+-]+@(alunos\.utfpr\.edu\.br|professores\.utfpr\.edu\.br|utfpr\.edu\.br)$/.test(userData.email)) {

                userVal.email = true;
                document.getElementById('noEmail').style.display = 'none'
                document.getElementById('erroEmail').style.display = 'none'
                document.getElementById('Email').style.display = 'none'
                
            } else {

                document.getElementById('noEmail').style.display = 'none'
                document.getElementById('erroEmail').style.display = 'block'
                document.getElementById('Email').style.display = 'none'
            }

        } else {

            document.getElementById('noEmail').style.display = 'block'
            document.getElementById('erroEmail').style.display = 'none'
            document.getElementById('Email').style.display = 'none'
        }

        if (userVal.email) {
    
            fetch("http://localhost:3000/api/v1/profile/forgetpassword", {
        
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(userData),
    
            })
            .then((response) => response.json())
            .then((data) => {
        
                console.log(data);
        
                if (data.success) {

                    setDisplay(true);

                    document.getElementById('noEmail').style.display = 'none'
                    document.getElementById('erroEmail').style.display = 'none'
                    document.getElementById('Email').style.display = 'none'

        
                } else if (!data.success) {

                    document.getElementById('Email').style.display = 'block';
                    document.getElementById('noEmail').style.display = 'none'
                    document.getElementById('erroEmail').style.display = 'none'
        
                }
            })
            .catch((error) => {console.error("Erro:", error); });
        };
    }

    function CloseIcon() { setDisplay(false); }

    function OpenLogin() { navigate('/signin') }
  
    function Success() {
        
        return ( 
    
            <UsefulBox 
            display={display}
            name={'Email_Sent'} 
            title={'Congratulations'}
            button={'Fazer Login'}
            message={'Um link de verificação foi enviado para seu email'}
            width={'25%'}
            height={'20%'} 
            onClickClose={CloseIcon} 
            onClickButton={OpenLogin}
            /> 
        ) 
    }

    return (

        <div className="conteinerEV">

            {Success()}

            <div className="boxEV">

                <div className="topBoxEV">

                    <p>Account_Validation</p>

                    <Link to={'/signin'}>
                        <AiFillCloseSquare
                            size={30}
                            className="closeIconEV"
                            cursor={'pointer'}
                        />
                    </Link>
                </div>

                <div className="contentBoxEV">

                    <p className="textBoxEV" >Informe seu email</p>

                    <input
                        title="Email"
                        name="Email"
                        type="text"
                        value={email}
                        autoComplete="off"
                        placeholder="@alunos.utfpr.edu.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <p className="errorMsgEV" id="noEmail"> Campo obrigatório </p>

                    <p className="errorMsgEV" id="erroEmail">  E-mail inválido </p>

                    <p className="errorMsgEV" id="Email"> E-mail não registrado </p>

                </div>

                <div className="bottomBoxEV">

                    <button onClick={forgetpassword}>Enviar Confirmação</button>

                </div>
            </div>
        </div>
    )
}