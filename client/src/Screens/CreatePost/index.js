import React, {useState, useEffect} from 'react';
import {PostingRule, CreatePostEditor, Footer} from "../../Components";
import style from './CreatePost.module.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchGroupFollowing } from "../../Services/Group";

const CreatePost = () => {
  const [groupID, setGroupID] = useState("0")
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetchGroupFollowing()
      setGroups(data)
    }
    fetchData()
  }, [])

  return (
      <div className={style.flexContainer}>
        <div className={style.leftContainer}>
          <h3 className={style.heading}>Tạo bài đăng</h3>
          <div className={style.chooseGroup}>
            <FontAwesomeIcon icon={faSearch}/>
            {/*<SearchOutlinedIcon/>*/}
            <select onChange={(e) => setGroupID(e.target.value)}>
              <option className={style.group} value={"0"}>
                <div className={style.groupName}>Chọn một nhóm</div>
              </option>
              {(groups.length > 0) && groups.map((group) =>
                  <option className={style.group} key={group.id} value={group.id}>
                    <div className={style.groupName}>{group.title}</div>
                  </option>
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