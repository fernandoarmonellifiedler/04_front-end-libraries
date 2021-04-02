import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Envelope() {
  return (
    <div className='envelope'>
      <AddressLabel person={fromPerson} />
      <div className='to-person'>
        <AddressLabel person={toPerson} className='to-person' />
      </div>
      <img
        className='stamp'
        src='https://www.flaticon.com/svg/vstatic/svg/1236/1236743.svg?token=exp=1617328444~hmac=9d6f062f1f54fc7b0b0355e9d5e32877'
        alt='stamp'
      />
    </div>
  );
}

function AddressLabel({ person }) {
  return (
    <div className='address-label'>
      <p>{person.name}</p>
      <p>
        {person.number} {person.address}
      </p>
      <p>
        {person.city} <span>{person.cp}</span>
      </p>
    </div>
  );
}

AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    cp: PropTypes.number,
  }),
};

const fromPerson = {
  name: 'Full Name',
  address: 'Fake St.',
  number: 123,
  city: 'Boston, MA',
  cp: parseInt('02118'),
};

const toPerson = {
  name: 'Mrs. Receiver',
  address: 'Fake St.',
  number: 123,
  city: 'San Fracisco, CA',
  cp: parseInt('94101'),
};

ReactDOM.render(<Envelope />, document.querySelector('#root'));
