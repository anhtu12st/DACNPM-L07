import { useState } from "react";
import { FilterPanel, Feed, CreatePostBar, GroupFollowing, TrendingGroup, Greeting, Footer, CreateGroupPopup } from "../../Components";
import { useUserContext } from "../../Contexts/UserContext";
import style from './Home.module.sass';


const HomeScreen = () => {
  const { isAuthenticated } = useUserContext();
  const [isCreateGroupPopup, setShow] = useState(false)
  //reduce
  const isClickonGreetingCreateGroup = () => {
    setShow(true)
  }
  const closeCreateGroupPopup = () => {
    setShow(false)
  }

  return (
    <div className={style.homeScreen}>
      <div className={style.leftContainer} style={{
        display: isAuthenticated() ? "block" : "none"
      }}>
        <GroupFollowing />
      </div>
      <div className={style.middleContainer}>
        <div style={{
          display: isAuthenticated() ? "block" : "none"
        }}>
          <CreatePostBar />
        </div>
        <FilterPanel />
        <Feed />
      </div>
      <div className={style.rightContainer}>
        <TrendingGroup />
        <div style={{
          display: isAuthenticated() ? "block" : "none"
        }}>
          <Greeting isGroupClick={isClickonGreetingCreateGroup} />
        </div>
        <Footer />
      </div>
      <div className={style.popup} style={{
        visibility: isCreateGroupPopup ? "visible" : "hidden",
      }}>
        <CreateGroupPopup close={closeCreateGroupPopup} />
      </div>
    </div>
  );
};
export default HomeScreen;