import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  };

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput gameStatus={gameStatus} onSubmitGuess={handleSubmitGuess} />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} onRestart={handleRestart} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} onRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
