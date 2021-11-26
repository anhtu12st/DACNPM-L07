import React, { useEffect, useState } from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
// import postsData from "../../MockData/PostsData";
import { listPosts } from '../../Services/Post';

const Feed = (props) => {
    const [postsData, setPostsData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const data = await listPosts()
            setPostsData(data)
        }
        fetchData()
    }, [])

    return (
        <div className={style.feedContainer}>
            {postsData && postsData.map(post => (
                <PostSummary
                    key={post.id}
                    content={post}
                />
            ))}
        </div>
    );
};

export default Feed;