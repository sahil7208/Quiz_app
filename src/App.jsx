import './App.css';
import AnswerTimer from './components/AnswerTimer';
import Quiz from './components/Quiz';
import { jsQuizz } from './constants';


function App() {
  return (
    
       <Quiz questions={jsQuizz.questions}/>
       
       
  );
}

export default App;

