import { Header } from "../Components";
import style from "./MainLayout.module.sass";

const Layout = (props) => {
  return (
    <div className={style.MainLayout}>
      <Header isLoggedIn={props.isLoggedIn} logOut={props.logOut}/>
      <div className={style.Main}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
