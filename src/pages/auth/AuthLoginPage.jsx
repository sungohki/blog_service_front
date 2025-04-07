import { AuthTemplate } from 'components/auth/AuthTemplate';
import LoginForm from 'containers/auth/LoginForm';
import React from 'react';

export const AuthLoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
