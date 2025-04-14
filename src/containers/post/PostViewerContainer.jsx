import { postsRemoveOne } from 'api/posts';
import PostActionButtons from 'components/post/PostActionButtons';
import PostViewer from 'components/post/PostViewer';
import { readPostOneThunk, unloadPost } from 'modules/post';
import { setOriginalPost } from 'modules/write';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, postError, loading, user } = useSelector(
    ({ user, post, loading }) => ({
      post: post.post,
      postError: post.postError,
      loading: loading['post/READ_POST'],
      user: user.user,
    })
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readPostOneThunk(postId));
    return () => {
      dispatch(unloadPost()); // 언로드 시 포스트 초기화
    };
  }, [dispatch, postId]);

  const handleEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const handleRemove = async () => {
    try {
      await postsRemoveOne(postId);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={postError}
      actionButtons={
        ownPost && (
          <PostActionButtons onEdit={handleEdit} onRemove={handleRemove} />
        )
      }
    />
  );
};
export default React.memo(PostViewerContainer);
