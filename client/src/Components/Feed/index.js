import React, { useEffect, useState } from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
// import postsData from "../../MockData/PostsData";
import { Link } from 'react-router-dom'
import { getPost } from '../../Services/Post';

const Feed = () => {
    const [postsData, setPostsData] = useState()
    useEffect( () => {
        const fetchData = async() => {
          const data = await getPost()
          console.log(data.data)
          setPostsData(data.data)
        }
        fetchData()
      }, [])
    return (
        <div className={style.feedContainer}>
            {/* {!!postsData && postsData.map(post =>
                <Link to={`/posts/${post.id}`} className={style.linkContainer}>
                    <PostSummary
                        content={post}
                        isSummary={true}
                    />
                </Link>
            )} */}
        </div>
    );
};

export default Feed;