import React from 'react';
import { getRarityColor } from '../data/items';

const Reel = ({ items, spinning, selectedItem, middleIndex }) => {
  return (
    <div className={`reel ${spinning ? 'spinning' : ''}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`reel-item ${index === middleIndex ? 'middle-item' : ''}`}
          style={{ 
            backgroundColor: getRarityColor(item.rarity),
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            opacity: !spinning && index === middleIndex ? 1 : 0.7,
            transform: !spinning && index === middleIndex ? 'scale(1.05)' : 'scale(1)',
            border: index === middleIndex ? '2px solid #ffd700' : 'none',
            position: 'relative',
            zIndex: index === middleIndex ? 2 : 1,
          }}
        >
          <span className="item-icon" role="img" aria-label={item.type}>
            {item.icon}
          </span>
          <span className="item-type">{item.type}</span>
          <span className="item-rarity">({item.rarity})</span>
        </div>
      ))}
    </div>
  );
};

export default Reel;