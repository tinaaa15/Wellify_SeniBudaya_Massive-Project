import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Berikut ini hasil nilai kamu</h3>
          <p>{correctAnswers} dari {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Waktu anda:</strong> {formatTime(time)}</p>
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Lihat jawaban anda</button>
          <button className="button is-success" onClick={onReset}>Mulai ulang</button>
        </div>
      </div>
    </div>
  );
}

export default End;