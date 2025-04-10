import AuthForm from 'components/auth/AuthForm';
import { StatusCodes } from 'http-status-codes';
import { changeField, initializeForm, registerThunk } from 'modules/auth';
import { checkThunk } from 'modules/user';
import React, { useEffect, useState } from 'react';
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
  const [error, setError] = useState(null);
  const [isInit, setIsInit] = useState(false);

  // 입력 시 store.auth.register 수정
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  // 제출 시 store.auth.login 제출 및 초기화
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈칸을 모두 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' })
      );
      return;
    }
    dispatch(registerThunk({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
    setIsInit(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isInit) return;
    if (authError) {
      if (authError.status === StatusCodes.CONFLICT) {
        setError('이미 존재하는 아이디입니다.'); // 409 Conflict
        return;
      }
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      window.alert('회원가입 성공', auth);
      dispatch(checkThunk());
    }
  }, [auth, authError, isInit, dispatch]);

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
      error={error}
    />
  );
};

export default React.memo(RegisterForm);
