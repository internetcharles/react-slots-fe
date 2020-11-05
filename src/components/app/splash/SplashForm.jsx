import React, { useState } from 'react';
import { postUser } from '../../../services/slots-api';
import { useHistory } from 'react-router-dom';

const SplashForm = () => {
  const [name, setName] = useState('');

  const history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const newUser = await postUser(name);
    history.push(`/${newUser.id}`);
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleNameChange} />
        <button>Play!</button>
      </form>
    </div>
  );
};

export default SplashForm;
