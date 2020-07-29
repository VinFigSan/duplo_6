import React from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'


function CadastroMesa(){
    return(
        <PageDefault>
            <h1>Crie sua mesa</h1>
            <form>
                <label>
                Nome da Categoria:
                <input type="text" />
                </label>

                <button>
                Cadastrar
                </button>
            </form>
            <Link to="/">Retornar a tela inicial</Link>
        </PageDefault>
    )
}

export default CadastroMesa