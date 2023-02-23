import React from 'react';

function GuessInput({ gameStatus, onSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    typeof onSubmitGuess === 'function' && onSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        id='guess-input'
        type='text'
        disabled={gameStatus !== 'running'}
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
