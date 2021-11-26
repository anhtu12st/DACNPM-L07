import style from "./Group.module.sass";
import {CreatePostBar, FilterPanel, Footer, GroupCover, GroupProfile, GroupRule} from "../../Components";
import GroupFeed from "../../Components/Feed/group";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGroupByID, isJoinGroup, resetJoinGroup } from "../../Services/Group";


const Group = () => {
    const [group, setGroup] = useState({title: "", desc: ""})
    const [isJoin, setJoin] = useState()
  
    const {id} = useParams()
    useEffect( () => {
      const fetchData = async() => {
        const data = await getGroupByID(id)
        setJoin(await isJoinGroup(id))
        setGroup(data)
      }
      fetchData()
    }, [id])
    const resetJoin = async() => {
      setJoin(!isJoin)
      await resetJoinGroup(id)
      
    }
    return (
        <div className={style.groupContainer}>
          <GroupCover/>
          <GroupProfile className={style.groupProfile} group={group} isJoin={isJoin} resetJoin={resetJoin} />
          <div className={style.flexContainer}>
                <div className={style.leftContainer}>
                  <CreatePostBar/>
                  <FilterPanel/>
                  <GroupFeed id={id}/>
                </div>
                <div className={style.rightContainer}>
                    <GroupRule/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Group;