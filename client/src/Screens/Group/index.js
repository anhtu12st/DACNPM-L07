import style from "./Group.module.sass";
import {Footer, GroupCover, GroupProfile, GroupRule} from "../../Components";
import GroupFeed from "../../Components/Feed/group";

const Group = () => {
    return (
        <div className={style.groupContainer}>
          <GroupCover/>
          <GroupProfile className={style.groupProfile}/>
          <div className={style.flexContainer}>
                <div className={style.leftContainer}>
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