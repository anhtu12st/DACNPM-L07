import React from 'react';
import style from './CreatePostBar.module.sass';
import MiddleBar from "../MiddleBar";

const CreatePostBar = (props) => {
  return (
      <MiddleBar>
        <div className={style.createPost}>
          <div className={style.postInput}>Create a post</div>
          <div className={style.postButton}>Submit</div>
        </div>
      </MiddleBar>
  )
}

export default CreatePostBar;