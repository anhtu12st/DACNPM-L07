import React from 'react';
import {Header} from "../../Components";

const CreatePost = () => {
  return (
      <div>
        <Header/>
        <div className='flex-container' >
          <div className='mid-area' id='create-post-container'>
            <label className='screen-label'>Create a post</label>
          </div>
        </div>
      </div>
  );
};

export default CreatePost;