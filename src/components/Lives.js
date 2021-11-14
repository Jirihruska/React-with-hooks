import React from 'react';
import '../styles/Lives.css';

const Lives = ({ lives }) => {

  return (
    <div className="lives">
      { lives.map((e, id) => <div key={id} className="live" />) }
    </div>
  )
}

export default Lives;
