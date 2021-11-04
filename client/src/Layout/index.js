import { Header } from "../Components";
import style from "./MainLayout.module.sass";

const MainLayout = (props) => {
  return (
    <div className={style.MainLayout}>
      <Header />
      <div className={style.Main}>
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
