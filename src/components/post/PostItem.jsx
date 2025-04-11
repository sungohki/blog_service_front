import React from 'react';
import styled from 'styled-components';
import PostSubInfo from './PostSubInfo';
import PostTagBox from './PostTagBox';

const PostItemBlock = styled.div`
  padding: 1rem 1rem;

  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    background-color: aliceblue;
  }
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid #aaa;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
    color: #333;
    transition: 0.2s ease color;
    &:hover {
      color: dodgerblue;
    }
  }
`;

const PostItem = () => {
  const tags = ['태그1', '태그2'];
  return (
    <PostItemBlock>
      <h2>포스트 제목</h2>
      <PostSubInfo username={'username'} publishedDate={null} />
      <p>body</p>
      <PostTagBox tags={tags} />
    </PostItemBlock>
  );
};

export default PostItem;
