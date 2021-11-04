import { GroupFollowing, CreatePostBar, Feed, TrendingGroup, CreateNew, Footer } from "../../Components";

import "./style.sass";
const HomeScreen = () => {
  return (
    <div className="Home">
      <div className="left-container">
        <GroupFollowing />
      </div>
      <div className="middle-container">
        <CreatePostBar />
        <Feed /> 
      </div>
      <div className="right-container">
        <TrendingGroup />
        <CreateNew />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
