import PostContainer from "../../Components/Post/PostContainer";
import "./styles.scss";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="LeftContainer">
        LeftContainer
      </div>
      <div className="MiddleContainer">
        <PostContainer/>
      </div>
      <div className="RightContainer">
        RightContainer
        {/* <GroupTrending />
        <AboutUs /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
