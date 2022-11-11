import React from 'react';
import {Container, Text} from "../Style/activityToolTypeStyle";
import PropTypes from 'prop-types';


/**
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX.Element}
 */

 export default function ActivityToolType({active, payload}) {
    if (active){
    return (
        <Container>
            <Text>{payload[0].value}kg</Text>
            <Text>{payload[1].value}Kcal</Text>
        </Container>
    
     )
    }
    return null
}

ActivityToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

