import PropTypes from 'prop-types';
import './style.css';

export const DefaultPage = ({ children }) => (
  <div className="w-screen h-screen flex items-center justify-center">
    <div className="default-page bg-white pt-10">
      {children}
    </div>
  </div>
);

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultPage;
