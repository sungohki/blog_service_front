import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
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

  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
      padding: 0.5rem 0;
    `}
`;

export const Button = ({ to, ...restProps }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) navigate(to);
    if (restProps.onClick) restProps.onClick(e);
  };

  return <ButtonBlock {...restProps} onClick={handleClick}></ButtonBlock>;
};
