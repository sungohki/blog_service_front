import React from 'react';
import styled from 'styled-components';

const PostTagBoxBlock = styled.div`
  margin-top: 0.5rem;

  .tag {
    margin: 0.4rem 0.2rem;
    padding: 0.2rem 0.4rem;
    border-radius: 30px;
    cursor: pointer;
    color: dodgerblue;
    transition: 0.2s ease color;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: dodgerblue;
      left: 0;
      transition: 0.2s ease transform;
      transform: scaleX(0);
    }

    &:hover {
      color: coral;
      &::after {
        transform: scaleX(1);
        background-color: lightcoral;
      }
    }
  }
`;

const PostTagBox = ({ tags }) => {
  return (
    <PostTagBoxBlock>
      {tags.map((item) => (
        <span key={item} className="tag">
          # {item}
        </span>
      ))}
    </PostTagBoxBlock>
  );
};

export default PostTagBox;
