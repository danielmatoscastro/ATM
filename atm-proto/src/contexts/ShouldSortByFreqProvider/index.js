import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ShouldSortByFreqContext } from './ShouldSortByFreqContext';

function getRandomBool() {
  const min = 0;
  const max = 2;
  return (Math.floor(Math.random() * (max - min)) + min) % 2 === 0;
}

export const ShouldSortByFreqProvider = ({ children }) => {
  const [shouldSortByFreq, setShouldSortByFreq] = useState(true);

  useEffect(() => {
    setShouldSortByFreq(getRandomBool());
  }, []);

  return (
    <ShouldSortByFreqContext.Provider value={{ shouldSortByFreq }}>
      {children}
    </ShouldSortByFreqContext.Provider>
  );
};

ShouldSortByFreqProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShouldSortByFreqProvider;
