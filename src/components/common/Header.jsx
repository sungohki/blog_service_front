import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  .logo {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 1rem;
  color: dodgerblue;
  & > span {
    font-size: 1rem;
    color: black;
    font-weight: 400;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = ({ user, handleLogout }) => {
  return (
    <>
      <HeaderBlock>
        <HeaderContainer>
          <Link to={'/'} className="logo">
            My Little Blog
          </Link>
          <div className="right">
            {user && (
              <UserInfo className="username">
                {user.username}
                <span> 님 환영합니다.</span>
              </UserInfo>
            )}
            {user ? (
              <Button onClick={handleLogout}>{'로그아웃'}</Button>
            ) : (
              <Button to={'/login'}>{'로그인'}</Button>
            )}
          </div>
        </HeaderContainer>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default React.memo(Header);
