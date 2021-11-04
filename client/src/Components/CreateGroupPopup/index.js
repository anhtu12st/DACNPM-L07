import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import style from "./CreateGroupPopup.module.sass";

const CreateGroupPopup = () => {
    return (
        <div className={style.createGroupPopup}>
            <div className={style.title}>
                <div>Gửi yêu cầu tạo nhóm mới</div>
                <I icon={faTimes} className={style.closeButton}/>
            </div>
            <div className={style.groupName}>
                <div>Tên nhóm</div>
                <input className={style.input} placeholder={"Tên nhóm muốn tạo"}></input>
            </div>
            <div className={style.groupDescription}>
                <div>Mô tả / Lý do</div>
                <input className={style.input} placeholder={"Mô tả nhóm và Lý do muốn tạo nhóm"}></input>
            </div>
            <div className={style.sendButton}>
                <span>Gửi yêu cầu</span>
            </div>
        </div>
    )
}
export default CreateGroupPopup;