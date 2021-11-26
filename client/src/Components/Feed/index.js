import React, {useEffect, useState} from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import { Link, Route } from 'react-router-dom'
import { downvotePost, upvotePost} from "../../Services/Vote";
import { PostDetailScreen } from "../../Screens";

const Feed = ({ handleVote, postsData }) => {
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