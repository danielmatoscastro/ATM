import PropTypes from 'prop-types';

export const DefaultButton = ({ className, children }) => (
  <button type="button" className={`default-button ${className}`}>
    {children}
  </button>
);

DefaultButton.defaultProps = {
  className: '',
};

DefaultButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
