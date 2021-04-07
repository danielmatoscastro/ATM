import { useContext } from 'react';
import { CurrentUserContext } from 'contexts/CurrentUserProvider/CurrentUserContext';

export const useCurrentUser = () => {
  const currentUser = useContext(CurrentUserContext);
  return currentUser;
};

export default useCurrentUser;
