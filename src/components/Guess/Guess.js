import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          status={result?.[num].status}
          letter={result?.[num].letter}
        />
      ))}
    </p>
  );
}

export default Guess;
