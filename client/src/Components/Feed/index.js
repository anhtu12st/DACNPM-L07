import React, {useEffect, useState} from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';

import { Link } from 'react-router-dom'
import {getPost, getPostGroupFollowing} from '../../Services/Post';
import { downvotePost, upvotePost} from "../../Services/Vote";

const Feed = ({ postsData, handleVote }) => {

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
                  handleVote={handleVote}
              />
            </Link>
        )}

      </div>
  );
};

export default Feed;