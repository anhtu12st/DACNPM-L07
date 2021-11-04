import { Footer } from "../../Components";
import "./style.sass";

const Group = () => {
    return (
        <div className="Group">
            <div className="left-container">
                <GroupProfile />
                <PostView />
            </div>
            <div className="right-container">
                <GroupAnalysis />
                <GroupRule />
                <GroupCurrentQuestions />
                <Footer />
            </div>
        </div>
    )
}
export default Group;