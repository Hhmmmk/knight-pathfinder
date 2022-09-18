import Button from '../Button/Button.component';

import './ModeSelector.styles.css';

const ModeSelector = () => {
  return (
    <div className='selector-container'>
      <div className='modes-container'>
        <Button buttonType='primary'>Random Enemies</Button>
        <Button buttonType='primary'>Place Enemies</Button>
        <Button buttonType='primary'>Place Knight</Button>
      </div>
      <div className='clear-container'>
        <Button buttonType='secondary'>Clear Board</Button>
      </div>
    </div>
  );
};

export default ModeSelector;
