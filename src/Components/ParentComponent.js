// In the parent component where you use the Quiz component:
import React, { useState } from 'react';
import Quiz from './Quiz'; // Make sure to import the Quiz component

function ParentComponent() {
  const [quizAnswers, setQuizAnswers] = useState(new Array(5).fill(null));

  // Define the submitQuiz function to handle quiz submission
  const submitQuiz = (selectedAnswers) => {
    // Process the selected answers here, e.g., send them to the server or perform any desired actions
    console.log('Selected answers:', selectedAnswers);
  };

  return (
    <div>
      <h1>Quiz Example</h1>
      <Quiz quizData={quizData} onSubmit={submitQuiz} />
    </div>
  );
}

export default ParentComponent;
