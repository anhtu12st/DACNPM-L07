import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './CreatePostEditor.module.sass';
import { TextSnippetOutlined, ImageOutlined, LinkOutlined, PollOutlined, LocalOfferOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import {TextEditor, RoundButton } from '../../Components'
import { createPost } from '../../Services/Post'

const CreatePostEditor = () => {

  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
  }
  const handleContent = (contentState) => {
    var content = ""
    contentState.blocks.map(block => content = content + "\n" + block.text)
    setForm({ ...form, "text": content });
  }
  const handleCreatePost = async (e) => {
      try {
          await createPost(form);
      } catch (error) {
          setError(error.response?.data?.message || "Unexpected error")
      }
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
          <input className={style.postTitle} placeholder={'Tiêu đề'} name="title" onChange={handleChange} value={form['title']} />
          <TextEditor placeholder={'Nội dung'} handleContent={handleContent}/>
        </div>
        <div className={style.btnContainer}>
          <RoundButton>
            <div className={style.flexWrapper}>
              <LocalOfferOutlined/>
              <span>Tag</span>
              <KeyboardArrowDownOutlined/>
            </div>
          </RoundButton>
          <RoundButton>
            <Link to="/" className={style.flexWrapper} onClick={handleCreatePost}  style={{ textDecoration: 'none', color: 'black'}}>
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