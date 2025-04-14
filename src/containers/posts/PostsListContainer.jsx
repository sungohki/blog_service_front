import PostList from 'components/posts/PostList';
import { listPostThunk } from 'modules/posts';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const PostsListContainer = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      listPostThunk({
        username: username,
        tag: searchParams.get('tag'),
        page: parseInt(searchParams.get('page'), 10) || 1,
      })
    );
  }, [dispatch, username, searchParams]);

  return (
    <PostList
      posts={posts}
      error={error}
      loading={loading}
      showWriteButton={user}
    />
  );
};
export default React.memo(PostsListContainer);
