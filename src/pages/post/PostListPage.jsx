import HeaderContainer from 'containers/common/HeaderContainer';
import PostsListContainer from 'containers/posts/PostsListContainer';
import PostsPaginationContainer from 'containers/posts/PostsPaginationContainer';
import React from 'react';

export const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostsListContainer />
      <PostsPaginationContainer />
    </>
  );
};
