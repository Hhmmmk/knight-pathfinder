import './Button.styles.css';

const Button = ({ buttonType, children }) => {
  const BUTTON_TYPE_CLASSES = {
    primary: 'primary',
    secondary: 'secondary',
  };

  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
