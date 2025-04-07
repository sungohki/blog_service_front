import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease background-color;
  background-color: skyblue;
  &:hover {
    background-color: dodgerblue;
  }
`;

export const Button = (props) => {
  return <ButtonBox {...props}></ButtonBox>;
};
