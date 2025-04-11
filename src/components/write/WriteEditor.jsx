import Quill from 'quill';
import 'quill/dist/quill.bubble.css'; // Quill.js의 bubble 테마 CSS
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WriteEditorBlock = styled.div`
  padding: 2rem 0;
`;

const WriteEditorTitleInput = styled.input`
  font-size: 2.5rem;
  outline: none;
  padding: 1rem 2rem;
  line-height: 1.5;
  border: none;
  border-bottom: 2px dashed skyblue;
  margin-bottom: 1rem;
  width: 100%;
  font-family: 'Noto Sans KR', 'Noto Serif Kr', sans-serif;
  &::placeholder {
    color: #aaa;
    transition: 0.2s ease color;
  }
  &:hover::placeholder {
    color: #666;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const QuillWrapper = styled.div`
  .ql-container {
    width: calc(100% - 2rem);
    margin: 0 auto;
  }
  .ql-editor {
    padding: 2px 5px;
    min-height: 300px;
    font-size: 1.125rem;
    border-radius: 5px;
    transition: 0.2s linear outline;
    outline: 2px solid transparent;
    &:focus {
      outline: 2px solid skyblue;
    }
  }
  .ql-editor.ql-blank::before {
    left: 5px;
  }
`;

const WriteEditor = ({ onChangeField, title, body }) => {
  const quillElement = useRef(null); // Quill.js를 사용할 DOM 요소
  const quillInstance = useRef(null); // Quill.js 인스턴스

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 입력하세요.',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quillEditor = quillInstance.current; // Quill.js 인스턴스
    quillEditor.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quillEditor.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const handleChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <WriteEditorBlock>
      <WriteEditorTitleInput
        placeholder="제목을 입력하세요"
        onChange={handleChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </WriteEditorBlock>
  );
};
export default WriteEditor;
