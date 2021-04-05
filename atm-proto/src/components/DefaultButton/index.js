import PropTypes from 'prop-types';
import './style.css';

export const DefaultButton = ({ className, onClick, children }) => (
  <button type="button" onClick={onClick} className={`default-button ${className}`}>
    {children}
  </button>
);

DefaultButton.defaultProps = {
  className: '',
  onClick: () => {},
};

DefaultButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
