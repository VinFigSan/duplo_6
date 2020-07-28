import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Duplo 6 logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">Procurar uma mesa</Button>
            <Button as="a" className="ButtonLink" href="/">Acessar</Button>
        </nav>
    )
}

export default Menu