import { AuthTemplate } from 'components/auth/AuthTemplate';
import LoginForm from 'containers/auth/LoginForm';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const AuthLoginPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인 - My Little Blog</title>
      </Helmet>

      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};
