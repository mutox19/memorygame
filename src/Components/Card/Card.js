import React, {useState} from 'react';
import PropTypes from 'prop-types'
import './styles.css'


const Card = ({ disabled,handleClick, id, type, flipped, height, width, solved }) => {
    
    console.log((disabled));
    
    return (
        <div className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{ width, height }} 
            onClick={() => disabled ? null : handleClick(id)}>

            <div className="flipper">
                <img style={{ height, width }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? require( `../../Images/${type}.jpg`) : require( `../../Images/cardback.gif`)} 
                    />

            </div>
        </div>
    );
};


Card.prototype = {
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped:PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    solved:PropTypes.bool.isRequired,
}
export default Card;