import React from 'react';
import { useUser } from '../hooks/user';
import PropTypes from 'prop-types';
import Machine from './Machine';

const Slots = (props) => {

  const { user } = useUser(props.match.params.userId);

  return (
    <>
      <h1 data-testid="slots">{user.name}</h1>
      <Machine {...props} />
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
