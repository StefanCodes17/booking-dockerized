import React, { createContext, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { useQuery } from 'react-query';
import api from '../services/api';

const initialState = {
  isLoading: true,
  user: null,
};

const UserContext = createContext(initialState);

function UserProvider(props) {
  const { children } = props;
  const [contextSettings, setContextSettings] = useState(initialState);
  const token = window.localStorage.getItem('access_token');

  if (token) {
    useQuery(`user`, () => api.get(`/users/me`), {
      onSuccess: async (response) => {
        const user = await response.data.user;
        setContextSettings({ ...contextSettings, user, isLoading: false });
        return true;
      },
      onError: () => {
        return true;
      },
    });
  } else {
    return children;
  }

  const { isLoading } = contextSettings;

  return (
    <UserContext.Provider
      value={{
        ...contextSettings,
      }}
    >
      {isLoading && <LoadingScreen />}
      {!isLoading && children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
