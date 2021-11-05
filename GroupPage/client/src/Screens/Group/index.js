import "./style.sass";
import { Footer, GroupProfile, GroupRule, Header } from "../../Components";
import GroupFeed from "../../Components/Feed/group";

const Group = () => {
    return (
        <div>
            <Header/>
            <div className="Group">
                <div className="left-container">
                    <GroupProfile/>
                    <GroupFeed/>
                </div>
                <div className="right-container">
                    <GroupRule/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Group;