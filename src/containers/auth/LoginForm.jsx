import AuthForm from 'components/auth/AuthForm';
import { changeField, initializeForm, loginThunk } from 'modules/auth';
import { checkThunk } from 'modules/user';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isInit, setIsInit] = useState(false);

  // 입력 시 store.auth.login 수정
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  // 제출 시 store.auth.login 제출 및 초기화
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(loginThunk({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
    setIsInit(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isInit) return;
    if (authError) {
      console.error('Login failed', authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      window.alert(auth.username + ' 로그인 성공');
      dispatch(checkThunk());
    }
  }, [isInit, auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.error('error: localStorage is not working', error);
      }
    }
  }, [user, navigate]);

  return (
    <AuthForm
      type={'login'}
      form={form}
      onSubmit={handleSubmit}
      onChange={handleChange}
      error={error}
    />
  );
};

export default React.memo(LoginForm);
