import React from 'react';
import { useUser } from '../hooks/user';
import PropTypes from 'prop-types';
import Machine from './Machine';

const Slots = (props) => {

  const { user } = useUser(props.match.params.userId);

  return (
    <>
      <h1>{user.name}</h1>
      <h3>Money: {user.money}</h3>
      <Machine />
    </>
  );
};

Slots.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    })
  })
};

export default Slots;
