import { useContext } from 'react';
import { LogContext } from 'contexts/LogProvider/LogContext';

export const useLog = () => {
  const log = useContext(LogContext);
  return log;
};

export default useLog;
