import style from './PostDetail.module.sass'
import { useParams } from 'react-router-dom'
import postsData from '../../MockData/PostsData'
import {Footer, GroupProfile, Header} from "../../Components";

const fetchPost = (id) => {
  return postsData.filter(item => item.id === id)[0]
}

const PostDetailScreen = () => {
  const { id } = useParams()
  const detail = fetchPost(id)

  return (
      <div className={style.postDetailScreen}>
        <div className={style.leftContainer}>

        </div>
        <div className={style.rightContainer}>
          <Footer/>
        </div>
      </div>
  )
}
export default PostDetailScreen;