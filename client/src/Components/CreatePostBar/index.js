import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import style from './CreatePostBar.module.sass';
import MiddleBar from "../MiddleBar";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePostBar = (props) => {
  const [Input, setInput] = useState("")
  const userInput = (e) => {
    setInput(e.target.value)
  }
  const resetInput = () => {
    setInput("")
  }
  return (
      <MiddleBar>
        <div className={style.createPost}>
          <div><Link to="/profile/123" style={{ textDecoration: 'none', color: 'black'}}><I icon={faUserCircle} className={style.userAvatar}/></Link></div>
          <input className={style.postInput} value={Input} onChange={userInput} placeholder="Tạo bài viết"/>
          <div className={style.postButton} onClick={resetInput}>Đăng</div>
        </div>
      </MiddleBar>
  )
}

export default CreatePostBar;