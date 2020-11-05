import { useEffect, useState } from 'react';
import { getUser } from '../../services/slots-api';

export const useUser = (id) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    getUser(id)
      .then(fetchedUser => setUser(fetchedUser));
  }, []);

  return {
    user
  };
};
