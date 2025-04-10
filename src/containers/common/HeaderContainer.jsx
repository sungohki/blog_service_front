import Header from 'components/common/Header';
import React from 'react';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const user = useSelector(({ user }) => user.user);
  return <Header user={user} />;
};
export default React.memo(HeaderContainer);
