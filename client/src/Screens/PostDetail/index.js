import style from './PostDetail.module.sass'
import { Link, useParams } from 'react-router-dom'
import postsData from '../../MockData/PostsData'
import {Footer, POST, GroupCover, GroupRule} from "../../Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

const fetchPost = (id) => {
  return postsData.filter(item => item.id === id)[0]
}

const PostDetailScreen = () => {
  const { id } = useParams()
  const detail = fetchPost(id)

  return (
      <div className={style.postDetailScreen}>
        <GroupCover >
          <Link to="/group" style={{textDecoration: "none"}}>
          <div className={style.content}>
            <div className={style.groupAvatar}>
              <FontAwesomeIcon icon={faGlobeAsia} className={style.avatar}></FontAwesomeIcon>
            </div>
            <div className={style.groupName}>Nhóm C++</div>
          </div>
          </Link>
        </GroupCover>
        <div className={style.groupCoverFooter}>
          <div className={style.postPost}>Bài viết</div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.leftContainer}>
            <POST />
          </div>
          <div className={style.rightContainer}>
            <GroupRule />
            <Footer/>
          </div>
        </div>
      </div>
  )
}
export default PostDetailScreen;