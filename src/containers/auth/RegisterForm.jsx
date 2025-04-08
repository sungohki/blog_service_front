import { AuthForm } from 'components/auth/AuthForm';
import { changeField, initializeForm, registerThunk } from 'modules/auth';
import { checkThunk } from 'modules/user';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(
    ({ auth, user }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
    shallowEqual
  );
  const navigate = useNavigate();

  // 입력 시 store.auth.register 수정
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  // 제출 시 store.auth.login 제출 및 초기화
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerThunk({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.error('회원가입 실패', authError);
      return;
    }
    if (auth) {
      window.alert('회원가입 성공', auth);
      dispatch(checkThunk());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <AuthForm
      type={'register'}
      form={form}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default React.memo(RegisterForm);
