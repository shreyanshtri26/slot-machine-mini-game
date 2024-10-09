export const items = [
  // Weapons (10 items)
  { type: 'AK-47', rarity: 'Common', weight: 20, icon: '🔫', category: 'Weapon' },
  { type: 'M416', rarity: 'Uncommon', weight: 15, icon: '🔫', category: 'Weapon' },
  { type: 'AWM', rarity: 'Rare', weight: 10, icon: '🎯', category: 'Weapon' },  // Sniper
  { type: 'UMP45', rarity: 'Common', weight: 20, icon: '🔫', category: 'Weapon' },  // SMG
  { type: 'Barrett M82', rarity: 'Legendary', weight: 5, icon: '💥', category: 'Weapon' },  // Sniper
  { type: 'Glock', rarity: 'Common', weight: 25, icon: '🔫', category: 'Weapon' },  // Pistol
  { type: 'Desert Eagle', rarity: 'Uncommon', weight: 15, icon: '🔫', category: 'Weapon' },  // Pistol
  { type: 'M870', rarity: 'Common', weight: 20, icon: '🔫', category: 'Weapon' },  // Shotgun
  { type: 'SPAS-12', rarity: 'Uncommon', weight: 15, icon: '🔫', category: 'Weapon' },  // Shotgun
  { type: 'M249', rarity: 'Rare', weight: 10, icon: '🔫', category: 'Weapon' },  // LMG

  // Consumables (10 items)
  { type: 'Bandage', rarity: 'Common', weight: 25, icon: '🩹', category: 'Consumable' },
  { type: 'First Aid Kit', rarity: 'Uncommon', weight: 20, icon: '💊', category: 'Consumable' },
  { type: 'Energy Drink', rarity: 'Common', weight: 20, icon: '🥤', category: 'Consumable' },
  { type: 'Adrenaline Syringe', rarity: 'Rare', weight: 10, icon: '💉', category: 'Consumable' },
  { type: 'Painkillers', rarity: 'Uncommon', weight: 15, icon: '💊', category: 'Consumable' },
  { type: 'Med Kit', rarity: 'Rare', weight: 10, icon: '🧳', category: 'Consumable' },
  { type: 'Bandage Roll', rarity: 'Common', weight: 25, icon: '🩹', category: 'Consumable' },
  { type: 'Morphine', rarity: 'Uncommon', weight: 15, icon: '💉', category: 'Consumable' },
  { type: 'Steroids', rarity: 'Rare', weight: 10, icon: '💪', category: 'Consumable' },
  { type: 'Combat Stims', rarity: 'Legendary', weight: 5, icon: '⚡', category: 'Consumable' },

  // Materials (10 items)
  { type: 'Level 1 Helmet', rarity: 'Common', weight: 20, icon: '⛑️', category: 'Material' },  // Armor
  { type: 'Level 2 Helmet', rarity: 'Uncommon', weight: 15, icon: '⛑️', category: 'Material' }, 
  { type: 'Level 3 Helmet', rarity: 'Rare', weight: 10, icon: '⛑️', category: 'Material' },
  { type: 'Level 1 Vest', rarity: 'Common', weight: 20, icon: '🦺', category: 'Material' },  // Armor
  { type: 'Level 2 Vest', rarity: 'Uncommon', weight: 15, icon: '🦺', category: 'Material' },
  { type: 'Level 3 Vest', rarity: 'Rare', weight: 10, icon: '🦺', category: 'Material' },
  { type: '4x Scope', rarity: 'Rare', weight: 10, icon: '🔭', category: 'Material' },  // Attachment
  { type: '8x Scope', rarity: 'Legendary', weight: 5, icon: '🔭', category: 'Material' },
  { type: 'Suppressor', rarity: 'Uncommon', weight: 15, icon: '🔇', category: 'Material' },  // Attachment
  { type: 'Extended Mag', rarity: 'Common', weight: 20, icon: '📏', category: 'Material' },  // Attachment

  // Unknown (10 items)
  { type: 'Mystery Box', rarity: 'Legendary', weight: 5, icon: '🎁', category: 'Unknown' },
  { type: 'Golden Key', rarity: 'Legendary', weight: 5, icon: '🔑', category: 'Unknown' },
  { type: 'Ancient Relic', rarity: 'Rare', weight: 10, icon: '🗿', category: 'Unknown' },
  { type: 'Magic Potion', rarity: 'Rare', weight: 10, icon: '🧪', category: 'Unknown' },
  { type: 'Alien Artifact', rarity: 'Uncommon', weight: 15, icon: '👽', category: 'Unknown' },
  { type: 'Broken Compass', rarity: 'Common', weight: 20, icon: '🧭', category: 'Unknown' },
  { type: 'Cursed Skull', rarity: 'Rare', weight: 10, icon: '💀', category: 'Unknown' },
  { type: 'Ancient Scroll', rarity: 'Uncommon', weight: 15, icon: '📜', category: 'Unknown' },
  { type: 'Enchanted Sword', rarity: 'Legendary', weight: 5, icon: '🗡️', category: 'Unknown' },
  { type: 'Mysterious Ring', rarity: 'Uncommon', weight: 15, icon: '💍', category: 'Unknown' },
];

// Function to get color based on rarity
export const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'Common': return '#b0bec5';  // Light grey
    case 'Uncommon': return '#4caf50';  // Green
    case 'Rare': return '#2196f3';  // Blue
    case 'Legendary': return '#ffab00';  // Gold
    default: return '#b0bec5';  // Default to grey
  }
};

// Function to get category icon based on the item category
export const getCategoryIcon = (category) => {
  switch (category) {
    case 'Weapon': return '🔫';  // Gun icon for weapons
    case 'Consumable': return '💊';  // Medical/consumable icon
    case 'Material': return '🛡️';  // Armor/attachment icon
    case 'Unknown': return '❓';  // Mystery icon for unknown items
    default: return '❓';  // Default for unknown
  }
};
