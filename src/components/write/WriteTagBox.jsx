import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const WriteTagBoxBlock = styled.div`
  width: 100%;
  border-top: 2px dashed skyblue;
  padding-top: 2rem;

  h4 {
    color: dodgerblue;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const WriteTagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 250px;
  border: 1px solid dodgerblue;

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
    border-right: 1px solid dodgerblue;
    &::placeholder {
      color: #666;
      transition: 0.2s ease color;
    }
    &:hover::placeholder {
      color: #999;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    cursor: pointer;
    padding: 0 1rem;
    border: none;
    font-weight: 600;
    transition: 0.2s ease opacity;
    color: white;
    background-color: dodgerblue;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const WriteTagListItemBlock = styled.div`
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
`;

const WriteTagListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링 처리
const WriteTagListItem = React.memo(({ tag, onRemove }) => {
  return (
    <WriteTagListItemBlock onClick={onRemove}># {tag}</WriteTagListItemBlock>
  );
});

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링 처리
const WriteTagList = React.memo(({ tags, onRemove }) => {
  return (
    <WriteTagListBlock>
      {tags.map((item) => (
        <WriteTagListItem
          key={item}
          tag={item}
          onRemove={() => onRemove(item)}
        />
      ))}
    </WriteTagListBlock>
  );
});

const WriteTagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 태그가 비어있으면 추가하지 않음
      if (tags.includes(tag)) return; // 이미 존재하는 태그는 추가하지 않음
      onChangeTags([...tags, tag]);
    },
    [onChangeTags, tags]
  );

  const handleRemoveTag = useCallback(
    (tag) => {
      onChangeTags(tags.filter((item) => item !== tag));
    },
    [tags, onChangeTags]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백 제거 후 태그 추가
      setInput(''); // 입력 필드 초기화
    },
    [input, insertTag]
  );

  return (
    <WriteTagBoxBlock>
      <h4># 태그</h4>
      <WriteTagForm>
        <input
          value={input}
          placeholder="태그를 입력하세요."
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          추가
        </button>
      </WriteTagForm>
      <WriteTagList tags={tags} onRemove={handleRemoveTag} />
    </WriteTagBoxBlock>
  );
};

export default WriteTagBox;
