import Responsive from 'components/common/Responsive';
import { StatusCodes } from 'http-status-codes';
import React from 'react';
import styled from 'styled-components';

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

const PostSubInfo = styled.div`
  color: dodgerblue;
  opacity: 0.9;
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;

  span + span:before {
    color: dodgerblue;
    padding: 0 0.25rem;
    content: '\\B7';
  }
`;

const PostTags = styled.div`
  maring-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  & > .tag {
    margin: 0.4rem 0.2rem;
    padding: 0.2rem 0.8rem;
    border-radius: 30px;
    cursor: pointer;
    color: white;
    background-color: dodgerblue;
    transition: 0.2s ease opacity;
    &:hover {
      opacity: 0.8;
    }
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
        <PostSubInfo>
          <span>{user.username}</span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </PostSubInfo>
        <PostTags>
          {tags.map((item) => (
            <div className="tag"># {item}</div>
          ))}
        </PostTags>
      </PostHeader>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      {/* 스크립트 공격 대비 속성 */}
    </PostViewerBlock>
  );
};
export default PostViewer;
