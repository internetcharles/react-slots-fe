import { useEffect, useState } from 'react';

export const useWallet = (amount) => {
  const [money, setMoney] = useState(100);

  useEffect(() => {
    setMoney(money + amount);
  }, []);

  return {
    money
  };
};
