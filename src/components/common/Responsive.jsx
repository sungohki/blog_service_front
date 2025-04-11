import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0 10px;
  width: 1024px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;

  transition: 0.4s ease width;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...restProps }) => {
  return <ResponsiveBlock {...restProps}>{children}</ResponsiveBlock>;
};

export default Responsive;
