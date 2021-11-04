import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";
import LongButton from "../LongButton";

import style from "./Greeting.module.sass";
const Greeting = () => {
  const title = 'Xin chào';

  return (
      <SidePanel title={title}>
        <p> Chào mừng bạn đến với diễn dàn, bạn đang ở màn hình chính. Bạn có thể tạo nhóm mới hoặc bài viết mới tại đây. </p>
        <div className={style.createGroup}>
          <LongButton content={"Tạo nhóm"} backGColor="blue"/>
        </div>
        <Link to='/createpost'>
          <LongButton content={"Tạo bài viết"}/>
        </Link>
      </SidePanel>
  );
}

export default Greeting;