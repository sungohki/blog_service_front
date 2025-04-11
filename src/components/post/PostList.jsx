import { Button } from 'components/common/Button';
import Responsive from 'components/common/Responsive';
import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListBlock = styled(Responsive)`
  margin-top: 2rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  & > .post-list {
    margin-bottom: 1rem;
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem 0;
`;

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button to="/write">Add Post</Button>
      </WritePostButtonWrapper>
      <div className="post-list">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};
export default PostList;
