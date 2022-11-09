import React from 'react';
import PropTypes from 'prop-types'; 
import {Wrapper, Infos, InfosData, InfosText} from "../Style/keyDataStyle";

/**
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 * @return {JSX.Element}
 */
 export default function KeyData({icon,info,text}) {
     
    return (  
    <Wrapper>
        <img src={icon} alt="calorie_icon"/>
        <Infos>
            <InfosData>{info}</InfosData>
            <InfosText>{text}</InfosText>
        </Infos>
    </Wrapper> );
}

KeyData.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}

 