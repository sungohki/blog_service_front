import { AuthTemplate } from 'components/auth/AuthTemplate';
import RegisterForm from 'containers/auth/RegisterForm';
import React from 'react';

export const AuthRegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};
