import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItemSubInfo = styled.div`
  color: #666;
  margin: 1rem 0;
  span + span:before {
    color: #666;
    padding: 0 0.25rem;
    content: '\\B7';
  }
`;

const PostSubInfo = ({ username, publishedDate }) => {
  return (
    <PostItemSubInfo>
      <span>
        <Link to={`/${username}`}>{username}</Link>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </PostItemSubInfo>
  );
};
export default PostSubInfo;
