import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [questionState, setQuestionState] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => setQuestionState(!questionState)}
        >
          {questionState ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {questionState && <p>{info}</p>}
    </article>
  );
};

export default Question;
