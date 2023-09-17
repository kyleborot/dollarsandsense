import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Quiz from './Quiz';
import quizData from './quizData.json';
import articleData from './articleData.json';


const submitQuiz = (selectedAnswers) => {
  // Process the selected answers here, e.g., send them to the server or perform any desired actions
  console.log('Selected answers:', selectedAnswers);
};

function Platform() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Budgeting",
      isOpen: false,
      activities: [
        { id: 1, type: "activity", name: "Activity 1" },
        { id: 2, type: "quiz", name: "Quiz 1" },
      ],
    },
    {
      id: 2,
      title: "Saving",
      isOpen: false,
      activities: [
        { id: 3, type: "activity", name: "Activity 2" },
        { id: 4, type: "quiz", name: "Quiz 2" },
      ],
    },
    {
      id: 3,
      title: "Debt",
      isOpen: false,
      activities: [
        { id: 5, type: "activity", name: "Activity 3" },
        { id: 6, type: "quiz", name: "Quiz 3" },
      ],
    },
    {
      id: 4,
      title: "Credit",
      isOpen: false,
      activities: [
        { id: 7, type: "activity", name: "Activity 4" },
        { id: 8, type: "quiz", name: "Quiz 4" },
      ],
    },
    {
      id: 5,
      title: "Loans",
      isOpen: false,
      activities: [
        { id: 9, type: "activity", name: "Activity 5" },
        { id: 10, type: "quiz", name: "Quiz 5" },
      ],
    },
    {
      id: 6,
      title: "Introduction to Investment",
      isOpen: false,
      activities: [
        { id: 11, type: "activity", name: "Activity 6" },
        { id: 12, type: "quiz", name: "Quiz 6" },
      ],
    },
    {
      id: 7,
      title: "Introduction to the Stock Market",
      isOpen: false,
      activities: [
        { id: 13, type: "activity", name: "Activity 7" },
        { id: 14, type: "quiz", name: "Quiz 7" },
      ],
    },
    {
      id: 8,
      title: "Risk Management",
      isOpen: false,
      activities: [
        { id: 15, type: "activity", name: "Activity 8" },
        { id: 16, type: "quiz", name: "Quiz 8" },
      ],
    },
    {
      id: 9,
      title: "Investment Strategies",
      isOpen: false,
      activities: [
        { id: 17, type: "activity", name: "Activity 9" },
        { id: 18, type: "quiz", name: "Quiz 9" },
      ],
    },
  ]);

  const [activeModuleId, setActiveModuleId] = useState(null); // Define activeModuleId
  const [contentType, setContentType] = useState(null); // Define contentType
  const [activeQuiz, setActiveQuiz] = useState(null); //Define activeQuiz
  const [activeArticle, setActiveArticle] = useState(null); // Define activeArticle

  const handleModuleClick = (moduleId, content) => {
    setActiveModuleId(moduleId);

  // Check if the clicked content is a quiz and set activeQuiz accordingly
  if (content === 'quiz') {
    const activeQuizData = quizData.quizzes.find((quiz) => quiz.id === moduleId);

    if (activeQuizData) {
      setActiveQuiz({ quizData: activeQuizData });
      setActiveArticle(null);
    } else {
      // Handle the case where the quiz data is not found
      console.error(`Quiz data not found for moduleId: ${moduleId}`);
    }
  } 
  else if (content === 'article') {
    const activeArticleData = articleData.articles.find((article) => article.id === moduleId);

    if (activeArticleData) {
      setActiveArticle({ articleData: activeArticleData });
      setActiveQuiz(null);
    } else {
      console.error(`Article data not found for moduleId: ${moduleId}`);
    }
  }
  else {
    setActiveQuiz(null);
    setActiveArticle(null);
  }

  setContentType(content);
  };
  


  const toggleModule = (moduleId) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? { ...module, isOpen: !module.isOpen }
          : module
      )
    );
  };

  const selectedQuizIndex = 0;
  return (
    <div className="flex">
      <div className="w-72 h-screen bg-blue-900 relative">
        <ul>
          {modules.map((module) => (
            <li key={module.id}>
              <button
                onClick={() => toggleModule(module.id)}
                className={`cursor-pointer ${
                  module.id === 1 ? "bg-blue-900 text-white px-6 py-3" : "bg-blue-900 hover:bg-blue-700 text-white px-6 py-3"
                } hover:bg-blue-700 hover text-lg:text-white hover:bg-opacity-75 px-4 py-2 w-full mt-2`}
              >
                {module.title}
              </button>
              {module.isOpen && (
                <ul>
                  <li>
                    <button
                      onClick={() => handleModuleClick(module.id, 'article')}
                      className="bg-blue-900 hover:bg-blue-700 text-white hover:text-white hover:bg-opacity-75 px-4 py-2 w-full mt-2 text-sm"
                    >
                      Article
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleModuleClick(module.id, 'quiz')}
                      className="bg-blue-900 hover:bg-blue-700 text-white hover:text-white hover:bg-opacity-75 px-4 py-2 w-full mt-2 text-s,"
                    >
                      Quiz
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {activeQuiz && activeQuiz.quizData && (
      <div>
        <h2>{activeQuiz.quizData.title}</h2>
        <Quiz
          moduleId={activeModuleId}
          selectedQuiz={activeQuiz.quizData}
          onSubmit={submitQuiz}
        />
      </div>
    )}
      {activeArticle && activeArticle.articleData && (
        <div>
          <h2>{activeArticle.articleData.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: activeArticle.articleData.content,
            }}
          />
        </div>
      )}
    </div>
  );
}



export default Platform;
