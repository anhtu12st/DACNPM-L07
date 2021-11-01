import AboutUs from "../../Components/HomeComponent/AboutUs";
import CreateContent from "../../Components/HomeComponent/CreateContent";
import CreatePost from "../../Components/HomeComponent/CreatePost";
import GroupFollowing from "../../Components/HomeComponent/GroupFollowing";
import GroupTrending from "../../Components/HomeComponent/GroupTrending";
import PostContainer from "../../Components/HomeComponent/PostContainer";
import "./Home.scss";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="LeftContainer">
        <GroupFollowing />
      </div>
      <div className="MiddleContainer">
        <CreatePost />
        <PostContainer />
      </div>
      <div className="RightContainer">
        <GroupTrending />
        <CreateContent />
        <AboutUs aboutUs={"Đặng Hoài Bão đã viết trang này"}/>
      </div>
    </div>
  );
};

export default HomeScreen;
