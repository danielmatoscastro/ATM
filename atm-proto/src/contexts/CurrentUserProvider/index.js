import { useState } from 'react';
import PropTypes from 'prop-types';
import { useUsers } from 'hooks';
import { CurrentUserContext } from './CurrentUserContext';

export const CurrentUserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(-1);
  const { users } = useUsers();

  const currentUser = users.find((user) => user.id === currentUserId);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser: setCurrentUserId }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentUserProvider;
