import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Header() {
    return (
        <div className="header">
            <Link to="/login">
                <IconButton className = "headerButton">
                    <PersonIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
            
            
     

            <img className= "header__logo" src="https://lh3.googleusercontent.com/F1dppPH1J2EwG1EmPqdocwk2yeCP3P0DeCyZXR-wKl4ViGw0rjkGKGfILPDtoByiWmHbTXgSb0Fq445iLaWRCA3V-vOnUJdSEQsHuuCIevSDVY8ZvjiHrY2h7CNihjnZecYHF66X=w2400" width="50" alt="RoomE logo"/>
            
            <Link to="/">
                <IconButton className = "headerButton">
                    <HomeIcon className = "header_icon" fontSize = "large"/>
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header;