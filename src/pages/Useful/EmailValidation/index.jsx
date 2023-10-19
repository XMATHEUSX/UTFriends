import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './emailvalidation.css'

export default function Useful(props) {

    const [email, setEmail] = useState('')

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

                    <button>Enviar Confirmação</button>

                </div>
            </div>
        </div>
    )
}