import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import style from './CreatePostEditor.module.sass';
import {
  ImageOutlined,
  KeyboardArrowDownOutlined,
  LinkOutlined,
  LocalOfferOutlined,
  PollOutlined,
  TextSnippetOutlined
} from '@mui/icons-material'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import {RoundButton, TextEditor} from '../../Components'
import {createPost} from '../../Services/Post'
import {EditorState} from "draft-js";

const CreatePostEditor = ({ group }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [title, setTitle] = useState('')

  // const [form, setForm] = useState({});
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   setForm({ ...form, "group": props.group });
  // }, [props.group, form]);

  // const handleContent = (contentState) => {
  //   var content = ""
  //   contentState.blocks.map(block => content = content + "\n" + block.text)
  //   setForm({ ...form, "text": content });
  // }

  const handleCreatePost = () => {
    console.log(group)
    if (group < 0) {
      alert('Chọn nhóm để đăng bài')
      return;
    }
    const postContent = {
        title: title,
        text: editorState.getCurrentContent().getPlainText('\u0001'),
        group: group
    }
    createPost(postContent);
  }

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value)
  }

  return (
      <div className={style.container}>
        <div className={style.choosePostType}>
          <div className={style.postType}>
            <TextSnippetOutlined/>
            <span>Bài đăng</span>
          </div>
          <div className={style.postType}>
            <ImageOutlined/>
            <span>Hình ảnh & Video</span>
          </div>
          <div className={style.postType}>
            <LinkOutlined/>
            <span>Link</span>
          </div>
          <div className={style.postType}>
            <PollOutlined/>
            <span>Khảo sát</span>
          </div>
        </div>
        <div className={style.postContent}>
          <input className={style.postTitle} placeholder={'Tiêu đề'} name="title" onChange={handleTitleInputChange}
                 value={title}/>
          <TextEditor
              placeholder={'Nội dung'}
              editorState={editorState}
              setEditorState={setEditorState}
          />
        </div>
        <div className={style.btnContainer}>
          <RoundButton>
            <div className={style.flexWrapper}>
              <LocalOfferOutlined/>
              <span className={style.tag}>Tag</span>
              <KeyboardArrowDownOutlined/>
            </div>
          </RoundButton>
          <RoundButton>
            <Link to="/" className={style.flexWrapper} onClick={handleCreatePost}
                  style={{textDecoration: 'none', color: 'black'}}>
              <span>post</span>
            </Link>
          </RoundButton>
        </div>
        <div className={style.sendNotification}>
          <label><input type='checkbox'/>Gửi thông báo cho tôi</label>
        </div>
      </div>
  );
};

export default CreatePostEditor;