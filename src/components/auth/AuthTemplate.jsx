import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AuthTemplateInnerBlock = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  .logo-area {
    padding-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1.4rem;

    a {
      transition: 0.2s ease color;
      &:hover {
        color: dodgerblue;
      }
    }
  }
`;

export const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthTemplateInnerBlock>
        <div className="logo-area">
          <Link to="/">My Little Blog</Link>
        </div>
        {children}
      </AuthTemplateInnerBlock>
    </AuthTemplateBlock>
  );
};
