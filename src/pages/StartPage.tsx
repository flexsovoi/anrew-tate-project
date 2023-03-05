import React from 'react'
import { Link } from 'react-router-dom';

const StartPage = () => {
    const ID = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return (
      <div>
          <Link to={`/game/${ID}`}>Start!</Link>
      </div>
  );
}

export default StartPage
