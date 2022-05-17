import React, { useState } from "react";
import FlashCard from "../Quizzes/Flashcard";
import {useNavigate} from 'react-router-dom'
import styles from "../Quizzes/Quizz.module.css"
const Quiz = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));
  const navigate= useNavigate();
  const currentQuestion = props.questions[questionIndex];
  
  if (!currentQuestion) { 
    
    function redirect(){
      setTimeout(() => { navigate(`/home`)
      }, 1000);
      
  }
    return(
    <div>
    <p>Ups! No tenemos más preguntas guía para orientarte</p>
    <button className={styles.flashcardbutton} onClick={redirect}>Deseo volver a la página principal</button>
    </div>
     ) 
    
      
  }

  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};

export default Quiz;