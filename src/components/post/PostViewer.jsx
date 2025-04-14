import Responsive from 'components/common/Responsive';
import { StatusCodes } from 'http-status-codes';
import React from 'react';
import styled from 'styled-components';
import PostSubInfo from '../common/PostSubInfo';
import PostTagBox from '../common/PostTagBox';

const PostViewerBlock = styled(Responsive)`
  margin-top: 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const PostHeader = styled.div`
  border-bottom: 2px dashed skyblue;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.4rem;
  clolr: dodgerblue;
`;

const PostViewerErrorBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: coral;
  min-height: 200px;
`;

const PostViewer = ({ post, loading, error }) => {
  if (error) {
    if (error.response && error.response.status === StatusCodes.NOT_FOUND) {
      // 404
      return (
        <PostViewerBlock>
          <PostViewerErrorBlock>404 Not Found</PostViewerErrorBlock>
        </PostViewerBlock>
      );
    }
    return (
      <PostViewerBlock>
        <PostViewerErrorBlock>400 Bad Request</PostViewerErrorBlock>
      </PostViewerBlock>
    );
  }

  if (loading || !post) {
    return <PostViewerBlock>대기 중...</PostViewerBlock>;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostHeader>
        <h1>{title}</h1>
        <PostSubInfo username={user.username} publishedDate={publishedDate} />
        <PostTagBox tags={tags} />
      </PostHeader>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      {/* 스크립트 공격 대비 속성 */}
    </PostViewerBlock>
  );
};
export default PostViewer;
