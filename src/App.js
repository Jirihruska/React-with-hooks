import { useEffect } from 'react';
import { useState } from 'react';
import { questions } from './Questions';
import Input from './components/Input';
import GameWindow from './components/GameWindow';
import Lives from './components/Lives';
import Score from './components/Score';
import GameOver from './components/GameOver';

function App() {

  const [ c, setC ] = useState(0);
  const [ lives, setLives ] = useState([0,0,0]);
  const [ question, setQuestion ] = useState(questions[c].question);
  const [ answer, setAnswer ] = useState(questions[c].answer);
  const [ input, setInput ] = useState('8');
  const [ score, setScore ] = useState(-1);
  const [ gameOver, setGameOver ] = useState(false);
  const [ win, setWin ] = useState(false);

  useEffect(() => {
    if (question === 'WIN!') {
      setWin(true);
    }
    if (input !== '') {
      if (input === answer) {
        setC(c + 1);
        setQuestion(questions[c].question);
        setAnswer(questions[c].answer);
        setScore(score + 1);
        setInput('');
      }
      if (input !== answer) {
        setLives((live) => live.filter((_, i) => i !== live.length - 1))
        setInput('');
        if (lives.length < 2) {
          setGameOver(true);
        }
      }
    }
  }, [input, answer, c, score, question]);

  return (
    <div> 
      { !gameOver && <>
      <GameWindow question={ question } />
      { !win && <Input setInput={ setInput } /> }
      <Lives lives={ lives }/>
      <Score score={ score } />
      </> }
      { gameOver && <GameOver/>}
    </div>
  );
}

export default App;
