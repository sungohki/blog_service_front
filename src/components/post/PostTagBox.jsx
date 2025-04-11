import React from 'react';
import styled from 'styled-components';

const PostTagBoxBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    margin: 0.4rem 0.2rem;
    padding: 0.2rem 0.8rem;
    border-radius: 30px;
    cursor: pointer;
    color: white;
    background-color: dodgerblue;
    transition: 0.2s ease opacity;
    &:hover {
      opacity: 0.8;
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
