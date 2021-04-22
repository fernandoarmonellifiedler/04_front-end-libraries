import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MultiCounter() {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0,
  });

  const incA = () => {
    setCounts({
      ...counts,
      countA: counts.countA + 1,
    });
  };

  const incB = () => {
    setCounts({
      ...counts,
      countB: counts.countB + 1,
    });
  };

  const badIncA = () => {
    setCounts({
      countA: counts.countA + 1,
    });
  };

  return (
    <>
      <div>A: {counts.countA}</div>
      <div>B: {counts.countB}</div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>
      <button onClick={badIncA}>Increment A Badly</button>
    </>
  );
}

ReactDOM.render(<MultiCounter />, document.getElementById('root'));
