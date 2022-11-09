import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

import '../../styles/components/layout/BotonWhats.css';

const BotonWhats = (props) => {
    return (
        <div className="whatsapp-button">
            <li><a href="https://web.whatsapp.com/" target="_blank"><AiOutlineWhatsApp /></a></li>   
        </div>         
    );
}

export default BotonWhats;