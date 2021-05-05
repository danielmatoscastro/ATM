import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ShouldSortByFreqContext } from './ShouldSortByFreqContext';

function getRandomBool() {
  const min = 0;
  const max = 2;
  return (Math.floor(Math.random() * (max - min)) + min) % 2 === 0;
}

export const ShouldSortByFreqProvider = ({ children }) => {
  const [shouldSortByFreq, setShouldSortByFreq] = useState(true);
  const [id, setId] = useState('');

  useEffect(() => {
    setShouldSortByFreq(getRandomBool());
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
