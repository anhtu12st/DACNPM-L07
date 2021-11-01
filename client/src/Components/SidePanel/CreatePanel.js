import React from 'react';
import { Link } from "react-router-dom";

const CreatePanel = () => {
    return (
        <div className='side-panel' id='create-panel'>
            <label>Home</label>
            <p>Welcome to your frontpage. Come here to check in with your favourite communities</p>
            <Link to='/createpost' className='long-btn' id='create-post-btn'>Create Post</Link>
        </div>
    );
}

export default CreatePanel;