import React, {useEffect, useState} from 'react';
import {CreatePostEditor, Footer, PostingRule} from "../../Components";
import style from './CreatePost.module.sass';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {fetchGroupFollowing} from "../../Services/Group";

const CreatePost = () => {
  const [groupID, setGroupID] = useState(-1)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroupFollowing()
      setGroups(data)
    }
    fetchData()
  }, [])

  const handleSelectInputChange = (e) => {
    setGroupID(e.target.value)
  }
  return (
      <div className={style.flexContainer}>
        <div className={style.leftContainer}>
          <h3 className={style.heading}>Tạo bài đăng</h3>
          <div className={style.chooseGroup}>
            <FontAwesomeIcon icon={faSearch}/>
            {/*<SearchOutlinedIcon/>*/}
            <select value={groupID} onChange={handleSelectInputChange}>
              <option value={-1} selected="selected">Chọn một nhóm</option>
              {(groups.length > 0) &&
              groups.map((group, idx) =>
                  <option key={idx} value={group._id}> {group.title}</option>
              )}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown}/> */}
          </div>
          <CreatePostEditor group={groupID}/>
        </div>
        <div className={style.rightContainer}>
          <PostingRule/>
          <Footer/>
        </div>
      </div>
  );
};

export default CreatePost;