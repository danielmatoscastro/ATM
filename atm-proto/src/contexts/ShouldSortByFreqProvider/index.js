import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ShouldSortByFreqContext } from './ShouldSortByFreqContext';

export const ShouldSortByFreqProvider = ({ children }) => {
  const [shouldSortByFreq] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    setId(uuidv4());
  }, []);

  return (
    <ShouldSortByFreqContext.Provider value={{ id, shouldSortByFreq }}>
      {children}
    </ShouldSortByFreqContext.Provider>
  );
};

ShouldSortByFreqProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShouldSortByFreqProvider;
