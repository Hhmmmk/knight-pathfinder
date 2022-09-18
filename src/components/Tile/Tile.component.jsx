import React, { Component } from 'react';

import './Tile.styles.css';

//used class component to utilize the useRef
class Tile extends Component {
  render() {
    const { info, onClickHandler, onRClickHandler } = this.props;
    const { tileId, color, classList, x, y } = info;

    return (
      <div
        onContextMenu={onRClickHandler}
        onClick={onClickHandler}
        id={tileId}
        className={`tiles ${color} ${classList} ${x},${y}`}
      >
        {/* <span>{`[${tileId}]`}</span> */}
      </div>
    );
  }
}

export default Tile;
