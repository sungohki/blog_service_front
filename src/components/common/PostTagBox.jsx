import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
      height: 100%;
      border: 1px dashed dodgerblue;
      border-radius: 4px;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: 0.2s ease transform, 0.2s ease opacity;
      transform: scale(0, 0);
    }

    &:hover {
      color: orangered;
      &::after {
        transform: scale(1, 1);
        opacity: 1;
        border: 1px dashed orangered;
      }
    }
  }
`;

const PostTagBox = ({ tags }) => {
  const { username } = useParams();

  return (
    <PostTagBoxBlock>
      {tags.map((item) => (
        <Link
          key={item}
          className="tag"
          to={username ? `/${username}?tag=${item}` : `/?tag=${item}`}
        >
          # {item}
        </Link>
      ))}
    </PostTagBoxBlock>
  );
};

export default PostTagBox;
