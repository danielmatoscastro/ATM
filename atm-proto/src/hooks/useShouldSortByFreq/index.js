import { useContext } from 'react';
import { ShouldSortByFreqContext } from 'contexts/ShouldSortByFreqProvider/ShouldSortByFreqContext';

export const useShouldSortByFreq = () => {
  const shouldSortByFreq = useContext(ShouldSortByFreqContext);
  return shouldSortByFreq;
};

export default useShouldSortByFreq;
