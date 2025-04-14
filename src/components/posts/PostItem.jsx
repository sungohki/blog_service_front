import React from 'react';
import styled from 'styled-components';
import PostSubInfo from '../common/PostSubInfo';
import PostTagBox from '../common/PostTagBox';
import { Link } from 'react-router-dom';

const PostItemBlock = styled.div`
  padding: 1rem 1rem;

  transition: 0.2s ease background-color;
  &:hover {
    background-color: aliceblue;

    h2 {
      color: blue;
    }
  }
  & + & {
    border-top: 1px solid #aaa;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
    color: #333;
    transition: 0.2s ease color;
  }
  p {
    transition: 0.2s ease color;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/${user.username}/${_id}`}>{title}</Link>
      </h2>
      <PostSubInfo username={user.username} publishedDate={publishedDate} />
      <p>
        <Link to={`/${user.username}/${_id}`}>{body}</Link>
      </p>
      <PostTagBox tags={tags} />
    </PostItemBlock>
  );
};

export default PostItem;
