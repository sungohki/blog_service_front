import { AuthForm } from 'components/auth/AuthForm';
import { AuthTemplate } from 'components/auth/AuthTemplate';
import React from 'react';

export const AuthLoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type={'login'} />
    </AuthTemplate>
  );
};
