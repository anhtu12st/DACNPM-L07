import { Link } from "react-router-dom";
import { SidePanel, RoundButton } from "../../Components";
import style from "./Greeting.module.sass";

const Greeting = (props) => {
  const title = 'Xin chào';

  return (
      <SidePanel title={title}>
        <div className={style.greetingContainer}>
          <p> Chào mừng bạn đến với diễn dàn, bạn đang ở màn hình chính. Bạn có thể tạo nhóm mới hoặc bài viết mới tại đây. </p>
          <div onClick={props.isGroupClick}>
            <RoundButton className={[style.createGroupBtn, style.createBtn].join(' ')}>
              Tạo nhóm mới
            </RoundButton>
          </div>
          <Link to='/createpost'>
            <RoundButton className={[style.createPostBtn, style.createBtn].join(' ')}>
              Tạo bài viết
            </RoundButton>
          </Link>
        </div>
      </SidePanel>
  );
}

export default Greeting;