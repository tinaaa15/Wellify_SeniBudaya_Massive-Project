import React from 'react';

const Start = ({ onGameStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Permainan Dimulai</h1>
          <p>Semoga Berhasil!</p>
          <button className="button is-info is-medium" onClick={onGameStart}>Mulai</button>
        </div>
      </div>
    </div>
  );
}

export default Start;