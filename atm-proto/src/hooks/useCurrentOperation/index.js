import { useContext } from 'react';
import { CurrentOperationContext } from 'contexts/CurrentOperationProvider/CurrentOperationContext';

export const useCurrentOperation = () => {
  const currentOperation = useContext(CurrentOperationContext);
  return currentOperation;
};

export default useCurrentOperation;
