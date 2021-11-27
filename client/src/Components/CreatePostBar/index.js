import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import style from './CreatePostBar.module.sass';
import MiddleBar from "../MiddleBar";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoundButton from "../RoundButton";
import { useUserContext } from '../../Contexts/UserContext';

const CreatePostBar = (props) => {
  const [Input, setInput] = useState("")
  const userInput = (e) => {
    setInput(e.target.value)
  }
  // const resetInput = () => {
  //   setInput("")
  // }
  const { userState } = useUserContext();
  return (
      <MiddleBar>
        <div className={style.createPost}>
          <div><Link to={`/profile/${userState?.userInfo?.id}`}  style={{ textDecoration: 'none', color: 'black'}}><I icon={faUserCircle} className={style.userAvatar}/></Link></div>
          <Link to="/createpost">
            <input className={style.postInput} value={Input} onChange={userInput} placeholder="Tạo bài viết"/>
            <RoundButton className={style.btn}>
              Đăng
            </RoundButton>
          </Link>
        </div>
      </MiddleBar>
  )
}

export default CreatePostBar;