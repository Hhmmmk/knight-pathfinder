import React, { Component } from 'react';

import './Tile.styles.css';

class Tile extends Component {
  render() {
    const { info, onClickHandler, onRClickHandler } = this.props;
    const { tileId, color, classList } = info;
    return (
      <div
        onContextMenu={onRClickHandler}
        onClick={onClickHandler}
        id={tileId}
        className={`tiles ${color} ${classList}`}
      >
        <span>{`[${tileId}]`}</span>
      </div>
    );
  }
}

export default Tile;

// const Tile = ({ info, onClickHandler, onRClickHandler }) => {
//   const { tileId, color, classList } = info;
//   // tileContent: knight, pawn
//   // tileStatus: selected, path, possibleMove

//   return (
//     <div
//       onContextMenu={onRClickHandler}
//       onClick={onClickHandler}
//       id={tileId}
//       className={`tiles ${color} ${classList}`}
//     >
//       <span>{`[${tileId}]`}</span>
//     </div>
//   );
// };
