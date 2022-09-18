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
  const knightPosition = 'selected';
  const chessBoardRef = useRef(null);

  const [classList, setClassList] = useState(defaultClassList);
  //--end-projectDefaults--//

  //--start-building board--//
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      //implementing alternating colors
      let tileColor = '';
      const number = i + j + 2;
      tileColor = number % 2 === 0 ? 'light-tiles' : 'dark-tiles';
      let horizontalPosition = i + 1;
      let verticalPosition = j + 1;

      let move_1x = horizontalPosition - 2;
      let move_1y = verticalPosition - 1;

      let move_2x = horizontalPosition - 2;
      let move_2y = verticalPosition + 1;

      let move_3x = horizontalPosition - 1;
      let move_3y = verticalPosition + 2;

      let move_4x = horizontalPosition + 1;
      let move_4y = verticalPosition + 2;

      let move_5x = horizontalPosition + 2;
      let move_5y = verticalPosition + 1;

      let move_6x = horizontalPosition + 2;
      let move_6y = verticalPosition - 1;

      let move_7x = horizontalPosition + 1;
      let move_7y = verticalPosition - 2;

      let move_8x = horizontalPosition - 1;
      let move_8y = verticalPosition - 2;

      //store tileInfo in array to be passed in the components as props
      tileInfo.push({
        tileId: horizontalAxis[i] + verticalAxis[j].toString(),
        color: tileColor,
        classList: `${horizontalPosition},${verticalPosition}`,
        // sequenceNumber: ,
        x: horizontalPosition,
        y: verticalPosition,
        possibleMoves: {
          move_01: `${move_1x},${move_1y}`,
          move_02: `${move_2x},${move_2y}`,
          move_03: `${move_3x},${move_3y}`,
          move_04: `${move_4x},${move_4y}`,
          move_05: `${move_5x},${move_5y}`,
          move_06: `${move_6x},${move_6y}`,
          move_07: `${move_7x},${move_7y}`,
          move_08: `${move_8x},${move_8y}`,
        },
      });
    }
  }
  //--end-building board--//

  //--start-click handlers--//
  const handleRightClick = (event) => {
    event.preventDefault();
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.remove('selected');
    activeTile.classList.remove('valid-move');

    const getProperties = tileInfo.filter((tiles) => {
      return event.target.id === tiles.tileId;
    });

    const properties = getProperties[0];

    const validMoves = Object.values(properties.possibleMoves);

    const moves = tileInfo.filter((tiles) => {
      return validMoves.includes(tiles.classList);
    });

    moves.forEach((tile) => {
      document.getElementById(tile.tileId).classList.remove('valid-move');
    });

    console.log(validMoves, moves);
  };

  const handleClick = (event) => {
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.add('selected');

    const getProperties = tileInfo.filter((tiles) => {
      return event.target.id === tiles.tileId;
    });

    const properties = getProperties[0];

    const validMoves = Object.values(properties.possibleMoves);

    const moves = tileInfo.filter((tiles) => {
      return validMoves.includes(tiles.classList);
    });

    moves.forEach((tile) => {
      document.getElementById(tile.tileId).classList.add('valid-move');
    });

    console.log(validMoves, moves);
  };
  //--end-click handlers--//

  return (
    <div className='chessboard'>
      {tileInfo.map((tile) => {
        return (
          <Tile
            ref={chessBoardRef}
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
