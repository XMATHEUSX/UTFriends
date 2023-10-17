import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './newpassword.css'

export default function Useful(props) {

    const [senha, setSenha] = useState('')
    const [senhaRep, setSenhaRep] = useState('')

    return (

        <div className="conteinerNP">

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

                    <p>Informe sua nova senha</p>

                    <input
                        title="Senha"
                        name="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                </div>

                <div className="contentBoxNP">

                    <p>Repita sua nova senha</p>

                    <input
                        title="Repetir Senha"
                        name="Repetir Senha"
                        type="password"
                        value={senhaRep}
                        onChange={(e) => setSenhaRep(e.target.value)}
                    />

                </div>

                <div className="bottomBoxNP">

                    <button>Alterar Senha</button>

                </div>
            </div>
        </div>
    )
}