import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Title } from "../Style/Error_404";


function Error () {
    
    return (
        <Main>
            <Title>404</Title>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
            <div style={{}}>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
        </Main>
    )
}

export default Error