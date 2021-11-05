import React from 'react';
import {Header, PostingRule, CreatePostEditor, Footer} from "../../Components";
import style from './CreatePost.module.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const CreatePost = () => {
  return (
      <div className={style.flexContainer}>
        <div className={style.leftContainer}>
          <h3 className={style.heading}>Tạo bài đăng</h3>
          <div className={style.chooseGroup}>
            <FontAwesomeIcon icon={faSearch}/>
            {/*<SearchOutlinedIcon/>*/}
            <input placeholder={'Chọn một nhóm'}/>
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
          <CreatePostEditor/>
        </div>
        <div className={style.rightContainer}>
          <PostingRule/>
          <Footer/>
        </div>
      </div>
  );
};

export default CreatePost;