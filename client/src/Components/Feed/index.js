import React, { useEffect, useState } from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import { Link, Route } from 'react-router-dom'
import {getPost} from '../../Services/Post';

import { PostDetailScreen } from "../../Screens";

const Feed = () => {
  const [postsData, setPostsData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost()
      setPostsData(data.data)
    }
    fetchData()
  }, [])

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