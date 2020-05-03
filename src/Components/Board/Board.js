import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Board = ({ disabled, dimension,cards, flipped, handleClick, solved }) => {

    console.log("Board:" + disabled);
    
    return (
        <div className='board'>
            {
                cards.map((card) => (
                    <Card
                    key={card.id}
                    type = {card.type}
                        id={card.id}
                        width={dimension / 4.5}
                        height={dimension / 4.5}
                        back={card.back}
                        front={require('../../Images/baseball.jpg')}
                        flipped={flipped.includes(card.id)}
                        handleClick={handleClick}
                        disabled={disabled || solved.includes(card.id)}
                        solved={solved.includes(card.id)}
                    />
                ))
            }
        </div>
    );
};


Board.prototype = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default Board;