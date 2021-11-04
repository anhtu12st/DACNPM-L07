import {FilterPanel, CreatePostBar, GroupFollowing, TrendingGroup, Greeting, Footer } from "../../Components";
import style from './Home.module.sass';


const HomeScreen = (props) => {
  return (
    <div>
      <div className={style.homeScreen}>
        <div className={style.leftContainer}>
          <GroupFollowing />
        </div>
        <div className={style.middleContainer}>
          <CreatePostBar />
          <FilterPanel/>
          {/* <Feed posts={posts}/> */}
        </div>
        <div className={style.rightContainer}>
          <TrendingGroup/>
          <Greeting/>
          <Footer/>
        </div>

      </div>
    </div>
  );
};
export default HomeScreen;