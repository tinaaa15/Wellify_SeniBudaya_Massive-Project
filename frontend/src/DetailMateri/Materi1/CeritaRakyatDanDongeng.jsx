import React from 'react';
import YouTube from 'react-youtube';

const CeritaRakyatDanDongeng = () => {
  const youtubeLink = 'https://www.youtube.com/watch?v=iv2l76s_sQ4';

  // Ambil bagian ID video dari URL
  const videoId = youtubeLink.split('v=')[1];

  return (
    <div className="center-container" style={{ background: '#F0ECCF' }}>
      <h1>Cerita Rakyat dan Dongeng</h1>
      <h6>Materi 4</h6>
      <div className="video-container">
        <YouTube videoId={videoId} />
      </div>
      <p style={{padding: '10px'}}>Dengan video ini, kita bisa belajar sambil bersenang-senang. Yuk kita tonton bersama!</p>
    </div>
  );
};

export default CeritaRakyatDanDongeng;
