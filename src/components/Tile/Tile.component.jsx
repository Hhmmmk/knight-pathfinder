import { useState } from 'react';

import './Tile.styles.css';

const Tile = ({ info: { tileId, color } }) => {
  const [tileContent, setTileContent] = useState('');

  // tileContent: knight, pawn
  // tileStatus: selected, path, possibleMove

  return (
    <div className={`tiles ${color}`}>
      <span>{`[${tileId}]`}</span>
    </div>
  );
};

export default Tile;
