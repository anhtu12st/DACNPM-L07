import style from './PostDetail.module.sass'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Footer, FullPost, GroupCover, GroupRule } from "../../Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getPostById } from '../../Services/Post';


const PostDetailScreen = ({ handleVote }) => {
  const history = useHistory();
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true)
      try {
        const data = await getPostById(id)
        setPost(data)
        setLoading(false)
      } catch (error) {
        history.replace('/')
      }
    }

    fetchPostData()
  }, [id, history])

  return (
    <div className={style.postDetailScreen}>
      {!loading && (<>
        <GroupCover >
          <Link to={`/group/${post.group._id}`} style={{ textDecoration: "none" }}>
            <div className={style.content}>
              <div className={style.groupAvatar}>
                <FontAwesomeIcon icon={faGlobeAsia} className={style.avatar} />
              </div>
              <div className={style.groupName}>{post.group.title}</div>
            </div>
          </Link>
        </GroupCover>
        <div className={style.groupCoverFooter}>
          <div className={style.postPost}>Bài viết</div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.leftContainer}>
            <FullPost post={post} handleVote={handleVote}/>
          </div>
          <div className={style.rightContainer}>
            <GroupRule />
            <Footer />
          </div>
        </div>
      </>)}
    </div>
  )
}
export default PostDetailScreen;