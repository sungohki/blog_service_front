import PostsPagination from 'components/posts/PostsPagination';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const PostsPaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const { username } = useParams();
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const { lastPage, posts, loading } = useSelector(
    ({ posts, loading }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    }),
    shallowEqual
  );

  // 포스트가 없거나 로딩 중인 경우
  if (loading || !posts) return null;

  return (
    <PostsPagination
      tag={tag}
      username={username}
      page={page}
      lastPage={lastPage}
    />
  );
};

export default React.memo(PostsPaginationContainer);
