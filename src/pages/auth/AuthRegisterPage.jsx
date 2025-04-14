import { AuthTemplate } from 'components/auth/AuthTemplate';
import RegisterForm from 'containers/auth/RegisterForm';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const AuthRegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>회원가입 - My Litte Blog</title>
      </Helmet>

      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};
