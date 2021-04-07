import { useState, useEffect, useCallback } from 'react';
import { users as initialUsers, usersIds } from 'mocks';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const setUserAmmount = useCallback((userId, ammount) => {
    setUsers((us) => us.map((user) => {
      if (user.id === userId) {
        return { ...user, ammount };
      }
      return user;
    }));
  }, [setUsers]);

  return { users, usersIds, setUserAmmount };
};

export default useUsers;
