import React from "react";
import { useState } from "react";
import './Searchbox.css'

export default function Searchbox() {

    const [busca, setBusca] = useState('')

    return(

        <div className="conteinerSB">

            <input
                title="SearchBox"
                id="SearchBox"
                type="text"
                onChange={(e) => setBusca(e.target.value)}
            />
        </div>
    )
}