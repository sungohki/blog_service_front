import { Button } from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

const WriteButtonsBlock = styled.div`
  margin: 1rem 0;
  button + button {
    margin-left: 1rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.1rem;
  &:nth-child(1) {
    background-color: dodgerblue;
    transition: 0.2s ease opacity;
    &:hover {
      opacity: 0.8;
    }
  }
  &:nth-child(2) {
    background-color: gray;
    transition: 0.2s ease background-color;
    &:hover {
      background-color: orangered;
    }
  }
`;

const WriteButtons = ({ onRegister, onCancel }) => {
  return (
    <WriteButtonsBlock>
      <StyledButton onClick={onRegister}>포스트 등록</StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteButtonsBlock>
  );
};
export default WriteButtons;
