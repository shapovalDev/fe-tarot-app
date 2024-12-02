'use client';

import React from 'react';
import ActionButton from '@/uiComponents/ActionButton';
import useLogin from '@/hooks/useLogin';

const NavBar = () => {
  const { login } = useLogin();
  return (
    <div className="flex justify-end p-2 bg-amber-200">
      <ActionButton onClick={login}>Login</ActionButton>
    </div>
  );
};

export default NavBar;
