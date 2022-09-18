import { useRef, useState } from 'react';

import Tile from '../Tile/Tile.component';
import './Chessboard.styles.css';

import knight from '../../assets/knight.png';
import pawn from '../../assets/pawn.png';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const Chessboard = () => {
  //--start-projectDefaults--//
  let tileInfo = [];
  const defaultClassList = '';
  const ref = useRef(null);

  const [classList, setClassList] = useState(defaultClassList);
  //--end-projectDefaults--//

  //--start-building board--//
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      //implementing alternating colors
      let tileColor = '';
      const number = i + j + 2;
      tileColor = number % 2 === 0 ? 'light-tiles' : 'dark-tiles';

      //store tileInfo in array to be passed in the components as props
      tileInfo.push({
        tileId: horizontalAxis[i] + verticalAxis[j].toString(),
        color: tileColor,
        classList: classList,
      });
    }
  }
  //--end-building board--//

  //--start-click handlers--//
  const handleRightClick = (event) => {
    event.preventDefault();
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.remove('selected');
  };

  const handleClick = (event) => {
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.add('selected');
  };
  //--end-click handlers--//

  return (
    <div className='chessboard'>
      {tileInfo.map((tile) => {
        return (
          <Tile
            ref={ref}
            onRClickHandler={handleRightClick}
            onClickHandler={handleClick}
            key={tile.tileId}
            info={tile}
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
