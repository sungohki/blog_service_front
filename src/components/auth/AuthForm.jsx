import { Button } from 'components/common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthFormBox = styled.div`
  h3 {
    margin: 0;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const AuthFormInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  padding: 0.8rem 0.5rem;
  border-radius: 5px;
  width: 100%;
  background-color: #eee;
  transition: 0.2s ease background-color;
  &:focus {
    background-color: #ddd;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthFormFooter = styled.div`
  margin-top: 1rem;
  text-align: center;

  a {
    color: #999;
    transition: 0.2s ease color;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      background-color: #999;
      width: 0%;
      height: 1px;
      transition: 0.2s ease width;
    }

    &:hover {
      color: #333;
      &::after {
        width: 100%;
      }
    }
  }
`;

export const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBox>
      <h3>{text}</h3>
      <form>
        <AuthFormInput type="text" placeholder="아이디" />
        <AuthFormInput type="password" placeholder="비밀번호" />
        {type === 'register' && (
          <AuthFormInput type="password" placeholder="비밀번호 확인" />
        )}
        <Button fullWidth style={{ marginTop: '1.5rem' }}>
          {text}
        </Button>
      </form>
      <AuthFormFooter>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </AuthFormFooter>
    </AuthFormBox>
  );
};
