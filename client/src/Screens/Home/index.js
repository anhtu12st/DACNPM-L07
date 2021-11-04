import { GroupFollowing, CreatePostBar, Feed, TrendingGroup, Footer } from "../../Components";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="left-container">
        <GroupFollowing />
      </div>
      <div className="middle-container">
        <CreatePostBar />
        <Feed /> 
      </div>
      <div className="right-container">
        <GroupTrending />
        {/* <CreateContent /> */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
