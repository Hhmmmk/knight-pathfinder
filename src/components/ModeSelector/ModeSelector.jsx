// import Button from '../Button/Button.component';

import './ModeSelector.styles.css';

const ModeSelector = () => {
  return (
    <div className='selector-container'>
      <div className='modes-container'>
        {/* can be an added feature in the future*/}
        {/* <Button buttonType='primary'>Random Enemies</Button>
        <Button buttonType='primary'>Place Enemies</Button>
        <Button buttonType='primary'>Place Knight</Button> */}
        <div className='instructions'>
          <h2>Instructions</h2>
          <p>Left click sets where your knight is.</p>
          <p>Right click removes any kind of indicator.</p>
        </div>
        <div className='indicators'>
          <p>
            <strong>Indicators</strong>
          </p>
          <p>Blue indicator highlights your input for the knight location.</p>
          <p>Green indicator highlights the valid moves for your input</p>
        </div>
      </div>
      {/* can be an added feature in the future*/}
      {/* <div className='clear-container'>
        <Button buttonType='secondary'>Clear Board</Button>
      </div> */}
    </div>
  );
};

export default ModeSelector;
