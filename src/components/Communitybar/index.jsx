import React, { useState } from "react";
import './communitybar.css'

export default function Communitybar() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {

        setIsExpanded(!isExpanded);
    }

    return(

        <div 
            className={`${isExpanded ? 'expandedCB' : 'conteinerCB'}`}
            onClick={toggleExpand}>

        </div>
    )
}