/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import { AccountForm } from '../../components/AccountForm';

export const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt'));

  useEffect(() => {
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>
          Leave
        </button>
      ) : (
        <AccountForm />
      )}
    </div>
  );
};
