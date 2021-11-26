import React, {useEffect, useState} from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import { Link } from 'react-router-dom'
import {getPost, getPostGroupFollowing} from '../../Services/Post';
import { useUserContext } from '../../Contexts/UserContext';

const Feed = () => {
  const [postsData, setPostsData] = useState([])
  const { isAuthenticated } = useUserContext();
  useEffect(() => {
    const fetchData = async () => {
      var data = 0
      if (isAuthenticated() )  {data = await getPostGroupFollowing()}
      else {data = await getPost()}
      setPostsData((data.data).reverse())
    }
    fetchData()
  }, [isAuthenticated])

  return (
      <div className={style.feedContainer}>
        {postsData.length > 0 && postsData.map((post, idx) =>
            <Link
                key={idx}
                to={{
                  pathname: `/posts/${post.id}`,
                  state: { post }
                }}
                className={style.linkContainer}
            >
              <PostSummary
                  content={post}
                  isSummary={true}
              />
            </Link>
        )}

      </div>
  );
};

export default Feed;