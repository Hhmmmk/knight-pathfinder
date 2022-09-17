import Tile from '../Tile/Tile.component';
import './Chessboard.styles.css';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const Chessboard = () => {
  let tileInfo = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      let tileColor = '';
      const number = i + j + 2;

      tileColor = number % 2 === 0 ? 'light-tiles' : 'dark-tiles';

      tileInfo.push({
        tileId: horizontalAxis[i] + verticalAxis[j].toString(),
        color: tileColor,
      });
    }
  }

  return (
    <div className='chessboard'>
      {tileInfo.map((tiles) => {
        return <Tile key={tiles.tileId} info={tiles} />;
      })}
    </div>
  );
};

export default Chessboard;
