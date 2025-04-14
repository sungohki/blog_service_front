import WriteButtons from 'components/write/WriteButtons';
import { patchPostThunk, writePostThunk } from 'modules/write';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WriteButtonsContainer = () => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    })
  );
  const navigate = useNavigate();

  const handleRegister = () => {
    if (originalPostId) {
      dispatch(patchPostThunk({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      writePostThunk({
        title,
        body,
        tags,
      })
    );
  };
  const handleCancel = () => {
    navigate(-1); // 뒤로가기
  };

  useEffect(() => {
    if (post) navigate(`/${post.user.username}/${post._id}`); // 작성된 포스트 페이지로 이동
    if (postError) console.error(postError); // 에러 출력
  }, [post, postError, navigate]);

  return (
    <WriteButtons
      onRegister={handleRegister}
      onCancel={handleCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default React.memo(WriteButtonsContainer);
