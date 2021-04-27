/* Create a CreditCard component.
Style it up with CSS or inline styles.
Accept a cardInfo prop that contains:
- person’s name
- expiration date
- credit card number
- bank name. 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ user }) {
  return (
    <div className='card'>
      <h2 className='right bank'>{user.bank}</h2>
      <p className='number'>{user.number}</p>
      <p className='left firstNums'>{user.firstNums}</p>
      <p>
        <span className='expText'>{user.expText} </span>
        {user.exp}
      </p>
      <p className='left name'>{user.name}</p>
    </div>
  );
}

const user = {
  name: 'Cardholder Name',
  expText: 'Valid Thru',
  exp: '08/19',
  number: "1234 5678 8765 4321",
  firstNums: 1234,
  bank: 'Big Bank, Inc.',
};

ReactDOM.render(<CreditCard user={user} />, document.querySelector('#root'));
