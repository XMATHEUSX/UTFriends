import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './emailvalidation.css'

export default function Useful(props) {

    const [email, setEmail] = useState('')

    const forgetpassword = () => {

        const userData = {
          email: email,
        };
    
        const userVal = {
          email: false,
        }
    
          fetch("http://localhost:3000/api/v1/profile/forgetpassword", {
    
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(userData),
    
        })
          .then((response) => response.json())
          .then((data) => {
    
            console.log(data);
    
            if (data.success) {

    
            } else if (!data.success) {
    
            }
          })
          .catch((error) => {console.error("Erro:", error);});
      };

    return (

        <div className="conteinerEV">

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

                    <p>Informe seu email</p>

                    <input
                        title="Email"
                        name="Email"
                        type="text"
                        value={email}
                        autoComplete="off"
                        placeholder="@alunos.utfpr.edu.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="bottomBoxEV">

                    <button onClick={forgetpassword}>Enviar Confirmação</button>

                </div>
            </div>
        </div>
    )
}