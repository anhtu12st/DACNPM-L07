import { Header } from "../Components";
import "./styles.scss";

const MainLayout = (props) => {
  return (
    <div className="MainLayout">
      <Header />
      <div className="Main">
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
