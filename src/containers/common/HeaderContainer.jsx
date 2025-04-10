import Header from 'components/common/Header';
import { logoutThunk } from 'modules/user';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HeaderContainer = () => {
  const user = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return <Header user={user} handleLogout={handleLogout} />;
};
export default React.memo(HeaderContainer);
