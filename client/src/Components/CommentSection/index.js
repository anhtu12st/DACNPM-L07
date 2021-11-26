import React, { useEffect, useState } from 'react';
// import {FontAwesomeIcon as I} from "@fortawesome/react-fontawesome";
// import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import style from './CommentSection.module.sass'
import { TextEditor } from "../index";
import { EditorState } from "draft-js";
import { createComment } from '../../Services/Comment';
import moment from 'moment';

const CommentSection = ({ post }) => {
  const [comment, setComment] = useState(() => EditorState.createEmpty())
  const [commentsList, setCommentsList] = useState([...post.comments])
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

  const handleCreateComment = async () => {
    try {
      const data = await createComment(post._id, { comment: comment.getCurrentContent().getPlainText('\u0001') })
      setCommentsList(data.comments)
      setComment(() => EditorState.createEmpty())
    } catch (error) { }
  }

  return (
    <div className={style.commentContainer}>
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

      {commentsList.map(({ author, text, created }) => (
        <div className={style.comment}>
          <div className={style.postInfoContent}>
            <span className={style.groupLabel}>{author.username}</span>
            <span className={style.postInfo}>{moment(created).fromNow()}</span>
          </div>
          <div className={style.commentContent}>
            {text}
          </div>
        </div>
      ))}

      <TextEditor
        placeholder={'Suy nghĩ của bạn thế nào?'}
        editorState={comment}
        setEditorState={setComment}
      />
      <button
        style={{ width: 150, height: 30, borderRadius: 20, textAlign: 'center', backgroundColor: 'blue', color: 'white', marginTop: 5 }}
        onClick={handleCreateComment}
      >Gửi</button>
    </div>
  );
};

export default CommentSection;