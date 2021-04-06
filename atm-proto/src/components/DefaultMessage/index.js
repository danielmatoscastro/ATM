import PropTypes from 'prop-types';
import './style.css';

export const DefaultMessage = ({ className, children }) => (
  <div className={`flex flex-col justify-around align-around default-message ${className}`}>
    {children}
  </div>
);

DefaultMessage.defaultProps = {
  className: '',
};

DefaultMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DefaultMessage;
