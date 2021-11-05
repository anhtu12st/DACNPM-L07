import React from 'react';
import style from './CreatePostEditor.module.sass';
import { TextSnippetOutlined, ImageOutlined, LinkOutlined, PollOutlined, LocalOfferOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { TextEditor, RoundButton } from '../../Components'

const CreatePostEditor = () => {
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
          <input className={style.postTitle} placeholder={'Tiêu đề'}/>
          <TextEditor placeholder={'Nội dung'}/>
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
            <div className={style.flexWrapper}>
              <span>post</span>
            </div>
          </RoundButton>
        </div>
        <div className={style.sendNotification}>
          <label><input type='checkbox'/>Gửi thông báo cho tôi</label>
        </div>
      </div>
  );
};

export default CreatePostEditor;