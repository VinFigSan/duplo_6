import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroUser(){
    return(
        <PageDefault>
            <h1>Novo Usuário</h1>

            <Link to="/cadastro/mesa">Crie a sua mesa</Link>
        </PageDefault>
    )
}

export default CadastroUser