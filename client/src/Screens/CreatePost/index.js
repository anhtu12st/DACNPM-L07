import React from 'react';
import {Header, SidePanel} from "../../Components";

const CreatePost = () => {
  return (
      <div>
        <Header/>
        <div className='flex-container' >
          <div className='mid-area' id='create-post-container'>
            <label className='screen-label'>Create a post</label>
          </div>
          <SidePanel showPostingRule={true}/>
        </div>
      </div>
  );
};

export default CreatePost;