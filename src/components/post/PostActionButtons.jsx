import React, { useState } from 'react';
import styled from 'styled-components';
import PostAskModal from './PostAskModal';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  outline: none;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: transparent;
  color: #999;
  transition: 0.2s ease background-color, 0.2s ease color;

  &:first-child:hover {
    background-color: dodgerblue;
    color: white;
  }
  &:last-child:hover {
    background-color: orangered;
    color: white;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const handleRemoveClick = () => {
    setModal(true);
  };
  const handleCancel = () => {
    setModal(false);
  };
  const handleConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <PostActionButtonsBlock>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={handleRemoveClick}>삭제</ActionButton>
      </PostActionButtonsBlock>
      <PostAskModal
        visible={modal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};
export default PostActionButtons;
