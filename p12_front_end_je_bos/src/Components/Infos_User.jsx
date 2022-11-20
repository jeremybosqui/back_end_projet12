import React from 'react';
import PropTypes from 'prop-types'; 
import {Head, Name} from "../Style/Infos_User";

/** afficher le name de l'utilisateur suivant l'id
* @param {string} name
* @return {JSX.Element}
*/

export default function UserInfos({name}) {

    return (  
          <Head>
              <title>Félicitation ! Vous avez explosé vos objectifs hier 👏</title>
            <h1>Bonjour <Name>{name}</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </Head>
    );
}

UserInfos.propTypes = {
	name: PropTypes.string,
};
