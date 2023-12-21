import React, { useState, useEffect } from 'react';
import './Games.css';

import Start from '../../Components/Start';
import Question from '../../Components/Question';
import End from '../../Components/End';
import Modal from '../../Components/Modal';
import gamesData from '../../data/games.json';

let interval;

const Games = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const gamesStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="Games">
      {step === 1 && <Start onGameStart={gamesStartHandler} />}
      {step === 2 && <Question 
        data={gamesData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={gamesData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={gamesData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={gamesData.data}
      />}
    </div>
  );
}

export default Games;