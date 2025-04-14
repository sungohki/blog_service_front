import { Button } from 'components/common/Button';
import qs from 'qs';
import React from 'react';
import styled from 'styled-components';

const PostPaginationBlock = styled.div`
  width: 320px;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageNumberBlock = styled.div``;

const buildReqLink = ({ username, tag, page }) => {
  const reqQuery = qs.stringify({ tag, page });
  return username ? `/${username}?${reqQuery}` : `/?${reqQuery}`;
};

const PostsPagination = ({ page, lastPage, username, tag }) => {
  return (
    <PostPaginationBlock>
      <Button
        disabled={page === 1}
        to={
          page === 1
            ? undefined
            : buildReqLink({ username, tag, page: page - 1 })
        }
      >
        이전
      </Button>
      <PageNumberBlock>{page}</PageNumberBlock>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildReqLink({ username, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PostPaginationBlock>
  );
};
export default PostsPagination;
