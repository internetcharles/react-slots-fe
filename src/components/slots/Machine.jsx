/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Machine.css';
import cherry from '../../assets/cherry.png';
import crown from '../../assets/crown.png';
import favorite from '../../assets/favorite.png';
import lemon from '../../assets/lemons.png';
import seven from '../../assets/seven.png';
import watermelon from '../../assets/cherry.png';
import { useWallet } from '../hooks/slot';

const Machine = () => {
  const [reels, setReels] = useState('');
  const [money, setMoney] = useState(100);

  const images = [cherry, crown, favorite, lemon, seven, watermelon];

  const randomImage = () => images[Math.floor((Math.random() * images.length))];

  const generateReels = () => {
    const reelOne = [];
    const reelTwo = [];
    const reelThree = [];

    reelOne.push(randomImage());
    reelOne.push(randomImage());
    reelOne.push(randomImage());

    reelTwo.push(randomImage());
    reelTwo.push(randomImage());
    reelTwo.push(randomImage());

    reelThree.push(randomImage());
    reelThree.push(randomImage());
    reelThree.push(randomImage());

    return { reelOne, reelTwo, reelThree };
  };

  const checkResults = (reel) => {
    if(reel.reelOne[0] === reel.reelTwo[0] && reel.reelOne[0] === reel.reelThree[0]) {
      console.log('win');
      return setMoney(money + 50);
    }
    if(reel.reelOne[1] === reel.reelTwo[1] && reel.reelOne[1] === reel.reelThree[1]) {
      console.log('win');
      return setMoney(money + 50);
    }
    if(reel.reelOne[2] === reel.reelTwo[2] && reel.reelOne[2] === reel.reelThree[2]) {
      console.log('win');
      return setMoney(money + 50);
    }
    else {
      return setMoney(money - 10);
    }
  };

  const respin = () => {
    const newReels = generateReels();
    setReels(newReels);
    checkResults(newReels);
    console.log(money);
  };

  if(!reels) return <div><button onClick={respin}>Spin!</button></div>;

  return (
    <div className={styles.machine}>
      <div className={styles.reelOne}>
        <img src={reels.reelOne[0]} />
        <img src={reels.reelOne[1]} />
        <img src={reels.reelOne[2]} />
      </div>
      <div className={styles.reelTwo}>
        <img src={reels.reelTwo[0]} />
        <img src={reels.reelTwo[1]} />
        <img src={reels.reelTwo[2]} />
      </div>
      <div className={styles.reelThree}>
        <img src={reels.reelThree[0]} />
        <img src={reels.reelThree[1]} />
        <img src={reels.reelThree[2]} />
      </div>
      <button onClick={respin}>Spin!</button>
    </div>
  );
};

export default Machine;
