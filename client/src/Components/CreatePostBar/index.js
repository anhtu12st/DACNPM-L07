import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import style from './CreatePostBar.module.sass';
import MiddleBar from "../MiddleBar";

const CreatePostBar = (props) => {
  return (
      <MiddleBar>
        <div className={style.createPost}>
          <div><I icon={faUserCircle} className={style.userAvatar}/></div>
          <div className={style.postInput}>Tạo bài viết</div>
          <div className={style.postButton}>Đăng</div>
        </div>
      </MiddleBar>
  )
}

export default CreatePostBar;