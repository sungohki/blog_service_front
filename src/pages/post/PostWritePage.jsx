import Responsive from 'components/common/Responsive';
import WriteEditor from 'components/write/WriteEditor';
import WriteButtons from 'components/write/WriteButtons';
import WriteTagBox from 'components/write/WriteTagBox';
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
      <WriteEditor />
      <WriteTagBox />
      <WriteButtons />
    </PostWritePageBlock>
  );
};
