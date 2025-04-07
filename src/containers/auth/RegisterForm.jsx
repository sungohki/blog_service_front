import { AuthForm } from 'components/auth/AuthForm';
import { changeField, initializeForm } from 'modules/auth';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(
    ({ auth }) => ({
      form: auth.register,
    }),
    shallowEqual
  );

  // 입력 시 store.auth.register 수정
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  // 제출 시 store.auth.login 제출 및 초기화
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

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
