import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useUsers } from 'hooks';
import { CurrentUserContext } from './CurrentUserContext';

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const { users } = useUsers();

  const setCurrentUserCallback = useCallback((userId) => {
    const newUser = users.find((user) => user.id === userId);
    setCurrentUser(newUser);
  }, [users, setCurrentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser: setCurrentUserCallback }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentUserProvider;
