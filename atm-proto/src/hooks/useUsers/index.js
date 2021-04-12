import { createLocalStorageStateHook } from 'use-local-storage-state';
import { users as initialUsers, usersIds } from 'mocks';

const useUsersInternal = createLocalStorageStateHook('users', initialUsers);

export const useUsers = () => {
  const [users, setUsers] = useUsersInternal();

  const setUserAmmount = (userId, ammount) => {
    setUsers((us) => us.map((user) => (user.id === userId ? ({ ...user, ammount }) : user)));
  };

  return { users, usersIds, setUserAmmount };
};

export default useUsers;
