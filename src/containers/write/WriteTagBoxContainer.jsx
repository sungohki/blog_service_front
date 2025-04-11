import WriteTagBox from 'components/write/WriteTagBox';
import { changeField } from 'modules/write';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WriteTagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }) => ({
    tags: write.tags,
  }));

  const handleChangeTags = (nextTags) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };

  return <WriteTagBox tags={tags} onChangeTags={handleChangeTags} />;
};

export default WriteTagBoxContainer;
