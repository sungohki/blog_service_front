import Responsive from 'components/common/Responsive';
import PostEditor from 'components/post/PostEditor';
import PostRegisterButtons from 'components/post/PostRegisterButtons';
import PostTagBox from 'components/post/PostTagBox';
import React from 'react';
import styled from 'styled-components';

const PostWritePageBlock = styled(Responsive)`
  position: relative;
  top: 2rem;
  background-color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const PostWritePage = () => {
  return (
    <PostWritePageBlock>
      <PostEditor />
      <PostTagBox />
      <PostRegisterButtons />
    </PostWritePageBlock>
  );
};
