import { useRef } from 'react';

import Tile from '../Tile/Tile.component';
import './Chessboard.styles.css';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const Chessboard = () => {
  //--Defaults--//
  let tileInfo = [];
  const chessBoardRef = useRef(null);
  //--end-projectDefaults--//

  //--start-building board--//
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      //implementing alternating colors
      let tileColor = '';
      const number = i + j + 2;
      tileColor = number % 2 === 0 ? 'light-tiles' : 'dark-tiles';

      //getting coords of validMoves
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
        x: horizontalPosition,
        y: verticalPosition,
        possibleMoves: {
          //is noted from topLeft of selected tile, going clockwise
          move_01: `${move_1x},${move_1y}`, //topLeft
          move_02: `${move_2x},${move_2y}`, //topRight
          move_03: `${move_3x},${move_3y}`, //rightTop
          move_04: `${move_4x},${move_4y}`, //rightBottom
          move_05: `${move_5x},${move_5y}`, //bottomRight
          move_06: `${move_6x},${move_6y}`, //bottomLeft
          move_07: `${move_7x},${move_7y}`, //leftBottom
          move_08: `${move_8x},${move_8y}`, // leftTop
        },
      });
    }
  }
  //--end-building board--//

  //--start-click handlers--//
  const handleClick = (event) => {
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.add('selected');

    //get the properties of the shown validMoves
    const getProperties = tileInfo.filter((tiles) => {
      return event.target.id === tiles.tileId;
    });
    const properties = getProperties[0];

    //getting the array of computed validMoves
    const validMoves = Object.values(properties.possibleMoves);

    //comparing computed validMoves to existing ones in the board and filtering them out
    const moves = tileInfo.filter((tiles) => {
      return validMoves.includes(tiles.classList);
    });

    //rendering the styling for the final list of valid moves
    moves.forEach((tile) => {
      document.getElementById(tile.tileId).classList.add('valid-move');
    });
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    const activeTile = document.getElementById(event.target.id);
    activeTile.classList.remove('selected');
    activeTile.classList.remove('valid-move');

    //get the properties of the shown validMoves
    const getProperties = tileInfo.filter((tiles) => {
      return event.target.id === tiles.tileId;
    });
    const properties = getProperties[0];

    //getting the array of computed validMoves
    const validMoves = Object.values(properties.possibleMoves);

    //comparing computed validMoves to existing ones in the board and filtering them out
    const moves = tileInfo.filter((tiles) => {
      return validMoves.includes(tiles.classList);
    });

    //removing indicators for the final list of valid moves
    moves.forEach((tile) => {
      document.getElementById(tile.tileId).classList.remove('valid-move');
    });
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
