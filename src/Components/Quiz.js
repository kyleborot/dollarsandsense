import React, { useState } from 'react';



function Quiz({ moduleId, selectedQuiz, onSubmit }) {
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(selectedQuiz.questions.length).fill(null));
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let correct = 0;

    selectedQuiz.questions.forEach((question, questionIndex) => {
      if (selectedAnswers[questionIndex] === question.correctAnswerIndex) {
        correct++;
      }
    });

    setCorrectAnswers(correct);

    setShowResult(true);
    onSubmit(selectedAnswers);
  };

  return (
    <div>
      <h2>{selectedQuiz.title}</h2>
      {selectedQuiz.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p>{question.text}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={optionIndex}
                    checked={selectedAnswers[questionIndex] === optionIndex}
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showResult && (
        <p>You got {correctAnswers} correct.</p>
      )}
    </div>
  );
}

export default Quiz;
