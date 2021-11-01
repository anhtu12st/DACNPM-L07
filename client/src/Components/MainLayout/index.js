import Header from "./Header";
import "./styles.scss";
import Trending from "./Trending";

const MainLayout = ({ children, showTrending = false }) => {
  return (
    <div className="MainLayout">
      <Header />
      <div className="Main">
        {showTrending && <Trending />}
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
