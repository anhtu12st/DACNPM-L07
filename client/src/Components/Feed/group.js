import React, { useState, useEffect } from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import { getPostbyGroup } from '../../Services/Post';
import { Link } from 'react-router-dom';

const GroupFeed = ({ id }) => {
    const [postsData, setPostsData] = useState([])
    useEffect( () => {
        const fetchData = async() => {
          const data = await getPostbyGroup(id)
          setPostsData((data.data).reverse())
        }
        fetchData()
      }, [id])
    return (
        <div className={style.feedContainer}>
            {postsData.length > 0 && postsData.map(post =>
                <Link to={`/posts/${post.id}`} className={style.linkContainer}>
                    <PostSummary
                        content={post}
                        isSummary={true}
                    />
                </Link>
            )}
        </div>
    );
};

export default GroupFeed;