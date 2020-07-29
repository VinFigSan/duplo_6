import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Duplo 6 logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/mesa">Procurar uma mesa</Button>
            <Button as={Link} className="ButtonLink" to="/cadastro/usuario">Acessar</Button>
        </nav>
    )
}

export default Menu