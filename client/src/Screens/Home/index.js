import { useState } from "react";
import {FilterPanel, Feed, CreatePostBar, GroupFollowing, TrendingGroup, Greeting, Footer, CreateGroupPopup } from "../../Components";
import style from './Home.module.sass';


const HomeScreen = (props) => {
  const [isPopup, setShow] = useState(false)

  return (
    <div className={style.homeScreen}>
      <div className={style.leftContainer}>
        <GroupFollowing />
      </div>
      <div className={style.middleContainer}>
        <CreatePostBar />
        <FilterPanel/>
        <Feed />
      </div>
      <div className={style.rightContainer}>
        <TrendingGroup/>
        <Greeting/>
        <Footer/>
      </div>
      <div className={style.popup} style={{
        visibility: isPopup ? "visible" : "hidden",
      }}>
        <CreateGroupPopup show={isPopup}/>
      </div>
    </div>
  );
};
export default HomeScreen;