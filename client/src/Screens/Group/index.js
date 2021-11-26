import style from "./Group.module.sass";
import {CreatePostBar, FilterPanel, Footer, GroupCover, GroupProfile, GroupRule} from "../../Components";
import GroupFeed from "../../Components/Feed/group";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGroupByID } from "../../Services/Group";


const Group = () => {
    const [group, setGroup] = useState()
    const {id} = useParams()
    useEffect( () => {
        const fetchData = async() => {
          const data = await getGroupByID(id)
          setGroup(data)
        }
        fetchData()
      }, [id])
    return (
        <div className={style.groupContainer}>
          <GroupCover/>
          <GroupProfile className={style.groupProfile} />
          <div className={style.flexContainer}>
                <div className={style.leftContainer}>
                  <CreatePostBar/>
                  <FilterPanel/>
                  <GroupFeed/>
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