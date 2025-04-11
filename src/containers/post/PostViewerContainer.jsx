import PostViewer from 'components/post/PostViewer';
import { readPostOneThunk, unloadPost } from 'modules/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    postError: post.postError,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPostOneThunk(postId));
    return () => {
      dispatch(unloadPost()); // 언로드 시 포스트 초기화
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={postError} />;
};
export default React.memo(PostViewerContainer);
