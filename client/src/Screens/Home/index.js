import PostContainer from "../../Components/Post/PostContainer";
import "./Home.scss";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="LeftContainer">
      </div>
      <div className="MiddleContainer">
        <CreatePost />
        <PostContainer />
      </div>
      <div className="RightContainer">
        {/* <GroupTrending />
        <AboutUs /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
