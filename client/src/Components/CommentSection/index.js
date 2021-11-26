import React, {useState} from 'react';
// import {FontAwesomeIcon as I} from "@fortawesome/react-fontawesome";
// import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import style from './CommentSection.module.sass'
import {TextEditor} from "../index";
import {EditorState} from "draft-js";

const CommentSection = () => {
  const [comment, setComment] = useState(() => EditorState.createEmpty())
  const [sortingOption, setSortingOption] = useState('Best')
  const dict = {
    Best: 'Tốt nhất',
    New: 'Mới nhất',
    Old: 'Cũ nhất',
    Controversial: 'Bàn luận nhiều nhất'
  }
  const handleSelectSortingChange = (e) => {
    setSortingOption(e.target.value)
  }
  return (
      <div className={style.commentContainer}>
        <TextEditor
            placeholder={'Suy nghĩ của bạn thế nào?'}
            editorState={comment}
            setEditorState={setComment}
        />
        <div className={style.sortingOption}>
          <label>Sắp xếp theo: </label>
          <select className={style.sortingSelection} onChange={handleSelectSortingChange}>
            <option value='Best' className={sortingOption === 'Best' ? undefined : style.unselectedOption}>
              {dict.Best}
            </option>

            <option value='New' className={sortingOption === 'New' ? undefined : style.unselectedOption}>
              {dict.New}
            </option>

            <option value='Old' className={sortingOption === 'Old' ? undefined : style.unselectedOption}>
              {dict.Old}
            </option>

            <option value='Controversial' className={sortingOption === 'Controversial' ? undefined : style.unselectedOption}>
              {dict.Controversial}
            </option>
          </select>
        </div>

        {/*<div className={style.comment}>*/}
        {/*  <div className={style.postInfoContent}>*/}
        {/*    <I icon={faUserCircle} className={style.groupAvatar}/>*/}
        {/*    <span className={style.groupLabel}>cuong231</span>*/}
        {/*    <span className={style.postInfo}>15 phút trước</span>*/}
        {/*  </div>*/}
        {/*  <div className={style.commentContent}>*/}
        {/*    Bài viết hay*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={style.comment}>*/}
        {/*  <div className={style.postInfoContent}>*/}
        {/*    <I icon={faUserCircle} className={style.groupAvatar}/>*/}
        {/*    <span className={style.groupLabel}>cuong231</span>*/}
        {/*    <span className={style.postInfo}>15 phút trước</span>*/}
        {/*  </div>*/}
        {/*  <div className={style.commentContent}>*/}
        {/*    Bài viết hữu ích*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={style.comment}>*/}
        {/*  <div className={style.postInfoContent}>*/}
        {/*    <I icon={faUserCircle} className={style.groupAvatar}/>*/}
        {/*    <span className={style.groupLabel}>anh21</span>*/}
        {/*    <span className={style.postInfo}>20 phút trước</span>*/}
        {/*  </div>*/}
        {/*  <div className={style.commentContent}>*/}
        {/*    Congrats. And thank you for passing on encouragement. Now do a little dance if you haven’t already.*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={style.comment}>*/}
        {/*  <div className={style.postInfoContent}>*/}
        {/*    <I icon={faUserCircle} className={style.groupAvatar}/>*/}
        {/*    <span className={style.groupLabel}>{"cuong231"+" "}</span>*/}
        {/*    <span className={style.postInfo}>{" 15 phút trước" }</span>*/}
        {/*  </div>*/}
        {/*  <div className={style.commentContent}>*/}
        {/*    Bài viết hữu ích*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
  );
};

export default CommentSection;