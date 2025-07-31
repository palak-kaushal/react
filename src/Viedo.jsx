import React from 'react';
const Viedo= () => {
  return (
    <div>
      <iframe
        width="600"
        height="350"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Viedo;
