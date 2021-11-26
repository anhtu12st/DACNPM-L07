import style from './PostDetail.module.sass'
import { Link, useParams } from 'react-router-dom'
import postsData from '../../MockData/PostsData'
import {Footer, FullPost, GroupCover, GroupRule} from "../../Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom'

//
// const fetchPost = (id) => {
//   return postsData.find(item => item.id === id)
// }

const PostDetailScreen = () => {
  const location = useLocation()
  console.log(location)
  const { post } = location.state
  return (
      <div className={style.postDetailScreen}>
        <GroupCover >
          <Link to="/group" style={{textDecoration: "none"}}>
          <div className={style.content}>
            <div className={style.groupAvatar}>
              <FontAwesomeIcon icon={faGlobeAsia} className={style.avatar}/>
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
            <FullPost post={post}/>
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