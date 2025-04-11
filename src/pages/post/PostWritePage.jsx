import Responsive from 'components/common/Responsive';
import WriteButtons from 'components/write/WriteButtons';
import React from 'react';
import styled from 'styled-components';
import WriteEditorContainer from 'containers/write/WriteEditorContainer';
import WriteTagBoxContainer from 'containers/write/WriteTagBoxContainer';

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
      <WriteEditorContainer />
      <WriteTagBoxContainer />
      <WriteButtons />
    </PostWritePageBlock>
  );
};
