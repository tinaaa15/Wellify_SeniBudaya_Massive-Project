import React from 'react';
import YouTube from 'react-youtube';

const SeniMenggambarDanMelukis = () => {
  const youtubeLink = 'https://www.youtube.com/watch?v=H5r2cKIWQzU';

  // Ambil bagian ID video dari URL
  const videoId = youtubeLink.split('v=')[1];

  return (
    <div className="center-container" style={{ background: '#F0ECCF' }}>
      <h1>Seni Menggambar dan Melukis</h1>
      <h6>Materi 3</h6>
      <div className="video-container">
        <YouTube videoId={videoId} />
      </div>
      <p style={{padding: '10px'}}>Dengan video ini, kita bisa belajar sambil bersenang-senang. Yuk kita tonton bersama!</p>
    </div>
  );
};

export default SeniMenggambarDanMelukis;
