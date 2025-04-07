import { AuthForm } from 'components/auth/AuthForm';
import { AuthTemplate } from 'components/auth/AuthTemplate';
import React from 'react';

export const AuthRegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type={'register'} />
    </AuthTemplate>
  );
};
