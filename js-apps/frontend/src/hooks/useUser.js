import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useUser() {
  const { user, isLoading } = useContext(UserContext);

  let isAdmin = false;
  if (user) {
    isAdmin = user.roles.some((role) => role.name === 'admin');
  }

  return { user, isLoading, isAdmin };
}
