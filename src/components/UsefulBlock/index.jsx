import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import './usefulblock.css'
import { Link } from "react-router-dom";

export default function UsefulBlock(props) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senharRep, setSenhaRep] = useState('')

    if (props.config == 'email') {
        
        return (

            <div className="boxUP">

                <div className="topBoxUP">

                    <p>New_Password</p>

                    <Link to={'/signin'}>
                        <AiFillCloseSquare
                            size={30}
                            className="closeIconUP"
                            cursor={'pointer'}
                        />
                    </Link>
                </div>

                <div className="contentBoxUP">

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

                <div className="bottomBoxUP">

                    <button>Enviar Confirmação</button>

                </div>
            </div>
        )

    } else if (props.config == 'senha') {

        return (

            <div className="boxUP">


            </div>
        )
    }
}