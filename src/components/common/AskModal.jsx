import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const FullScreen = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalBlock = styled.div`
  width: 320px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: end;
  }
`;

const ModalButton = styled(Button)`
  height: 2rem;
  &:last-child {
    background-color: #999;
    &:hover {
      background-color: orangered;
    }
  }
  & + & {
    margin-left: 0.75rem;
  }
`;

const AskModal = ({
  visible,
  title,
  description,
  confirmText = '확인',
  cancleText = '취소',
  onConfirm,
  onCancel,
}) => {
  if (!visible) return;
  return (
    <FullScreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <ModalButton onClick={onCancel}>{cancleText}</ModalButton>
          <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
        </div>
      </AskModalBlock>
    </FullScreen>
  );
};

export default AskModal;
