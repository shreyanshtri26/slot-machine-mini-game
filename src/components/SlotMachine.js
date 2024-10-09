import React, { useState, useEffect } from 'react';
import Reel from './Reel';
import { items, getRarityColor } from '../data/items';
import '../styles/SlotMachine.css';

const SlotMachine = () => {
  const [reels, setReels] = useState([[], [], []]);
  const [reelSpinning, setReelSpinning] = useState([false, false, false]);
  const [selectedRewards, setSelectedRewards] = useState([null, null, null]);
  const [credits, setCredits] = useState(1000);
  const [jackpot, setJackpot] = useState(0);
  const [canSpin, setCanSpin] = useState(true);

  const ITEMS_PER_REEL = 5;
  const MIDDLE_INDEX = Math.floor(ITEMS_PER_REEL / 2);
  const SPIN_COST = 10;

  // Define item values based on rarity
  const ITEM_VALUES = {
    'Legendary': 9,
    'Rare': 6,
    'Uncommon': 3,
    'Common': 1
  };

  useEffect(() => {
    setReels([
      getRandomItems(ITEMS_PER_REEL), 
      getRandomItems(ITEMS_PER_REEL), 
      getRandomItems(ITEMS_PER_REEL)
    ]);
  }, []);

  const getRandomItems = (count) => {
    const allItems = [...items];
    let selectedItems = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * allItems.length);
      selectedItems.push(allItems[randomIndex]);
    }
    return selectedItems;
  };

  const calculateJackpotContribution = (reelItems) => {
    // Calculate contribution based on the value of middle items in all reels
    return reelItems.reduce((total, item) => {
      return total + (ITEM_VALUES[item.rarity] || 0);
    }, 0);
  };

  const handleSpin = () => {
    if (credits < SPIN_COST) {
      alert("Not enough credits!");
      return;
    }

    setCanSpin(false);
    setCredits(prev => prev - SPIN_COST);
    
    setSelectedRewards([null, null, null]);
    setReelSpinning([true, true, true]);
    
    const newReels = reels.map(() => getRandomItems(ITEMS_PER_REEL));
    setReels(newReels);

    const stopTimes = [1000, 2000, 3000];
    
    stopTimes.forEach((time, index) => {
      setTimeout(() => {
        setReelSpinning(prev => {
          const newSpinning = [...prev];
          newSpinning[index] = false;
          return newSpinning;
        });

        setSelectedRewards(prev => {
          const newRewards = [...prev];
          newRewards[index] = newReels[index][MIDDLE_INDEX];
          return newRewards;
        });

        if (index === 2) {
          // After all reels stop, calculate jackpot contribution
          const middleItems = newReels.map(reel => reel[MIDDLE_INDEX]);
          const contribution = calculateJackpotContribution(middleItems);
          setJackpot(prev => prev + contribution);
          
          setCanSpin(true);
          checkWinning(middleItems);
        }
      }, time);
    });
  };

  const getJackpotPayout = (rarity) => {
    const payoutPercentages = {
      'Legendary': 0.8,
      'Rare': 0.5,
      'Uncommon': 0.3,
      'Common': 0.1
    };
    return Math.floor(jackpot * (payoutPercentages[rarity] || 0));
  };

  const calculateBaseWinAmount = (rarity) => {
    // Base win is now higher than item values to make wins meaningful
    switch (rarity) {
      case 'Legendary': return 500;
      case 'Rare': return 250;
      case 'Uncommon': return 100;
      case 'Common': return 50;
      default: return 0;
    }
  };

  const checkWinning = (selectedItems) => {
    const allSameType = selectedItems.every(item => 
      item && selectedItems[0] && item.type === selectedItems[0].type
    );
    
    const allSameRarity = selectedItems.every(item => 
      item && selectedItems[0] && item.rarity === selectedItems[0].rarity
    );

    if (allSameType && allSameRarity) {
      const rarity = selectedItems[0].rarity;
      const baseWinAmount = calculateBaseWinAmount(rarity);
      const jackpotWinAmount = getJackpotPayout(rarity);
      const totalWinAmount = baseWinAmount + jackpotWinAmount;

      setCredits(prev => prev + totalWinAmount);
      setJackpot(prev => prev - jackpotWinAmount);

      // Show detailed win message
      alert(
        `🎉 Congratulations! 🎉\n\n` +
        `Matching ${rarity} Items!\n` +
        `Base Win: ${baseWinAmount} credits\n` +
        `Jackpot Win: ${jackpotWinAmount} credits\n` +
        `Total Win: ${totalWinAmount} credits!`
      );
    } else {
      // If no win, show the contribution to jackpot
      const contribution = calculateJackpotContribution(selectedItems);
      alert(`Added ${contribution} credits to the jackpot!`);
    }
  };

  const isAnyReelSpinning = reelSpinning.some(spinning => spinning);

  return (
    <div className="slot-machine">
      <div className="header">
        <div className="jackpot">Jackpot: {jackpot} credits</div>
        <div className="credits">Credits: {credits}</div>
      </div>
      <div className="reels-container">
        {reels.map((reel, index) => (
          <Reel 
            key={index} 
            items={reel} 
            spinning={reelSpinning[index]} 
            selectedItem={selectedRewards[index]}
            middleIndex={MIDDLE_INDEX}
          />
        ))}
      </div>
      <button 
        className="spin-button" 
        onClick={handleSpin} 
        disabled={isAnyReelSpinning || !canSpin || credits < SPIN_COST}
      >
        {isAnyReelSpinning ? 'Spinning...' : `Spin (${SPIN_COST} credits)`}
      </button>
      <div className="rewards">
        <h3>Rewards</h3>
        <ul>
          {selectedRewards.map((item, index) => (
            <li 
              key={index} 
              style={{ 
                color: item ? getRarityColor(item.rarity) : 'inherit',
                opacity: reelSpinning[index] ? 0.5 : 1,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '10px',
                borderRadius: '5px',
                margin: '5px 0',
                transition: 'all 0.3s ease'
              }}
            >
              {item ? (
                <>
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-type">{item.type}</span>
                  <span className="item-rarity">({item.rarity})</span>
                </>
              ) : (
                'Spinning...'
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlotMachine;