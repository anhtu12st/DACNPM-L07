import Header from "./Header";
import Trending from "./Trending";
import "./styles.scss";

const MainLayout = ({ children, showTrending = true }) => {
  return (
    <div className="MainLayout">
      <Header />
      <div className="Main">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
