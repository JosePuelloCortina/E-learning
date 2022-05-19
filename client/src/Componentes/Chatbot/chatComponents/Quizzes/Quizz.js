import React, { useState } from "react";
import FlashCard from "../Quizzes/Flashcard";
import styles from "../Quizzes/Quizz.module.css"
const Quiz = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

  const currentQuestion = props.questions[questionIndex];
  
  if (!currentQuestion) { 
    
    return(
    <div>
    <p>Ups! No tenemos más preguntas guía para orientarte</p>
    
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