import React, {useState} from 'react';
import style from './TextEditor.module.sass'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

const TextEditor = ({ placeholder, handleContent, editorState, setEditorState }) => {
  const [isFocus, setFocus] = useState(false)

  return (
      <Editor
          placeholder={placeholder}
          editorState={editorState}
          toolbarClassName={style.toolbar}
          wrapperClassName={`${style.editorWrapper} ${isFocus && style.hasFocus}`}
          editorClassName={style.editor}
          onEditorStateChange={setEditorState}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          // onContentStateChange={(contentState) => handleContent(contentState)}
      />
  );
};

export default TextEditor;