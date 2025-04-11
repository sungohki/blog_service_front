import WriteEditor from 'components/write/WriteEditor';
import { changeField, initialize } from 'modules/write';
import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const WriteEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
    }),
    shallowEqual
  );

  const handleChangeField = useCallback(
    ({ key, value }) => dispatch(changeField({ key, value })),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <WriteEditor onChangeField={handleChangeField} title={title} body={body} />
  );
};

export default React.memo(WriteEditorContainer);
