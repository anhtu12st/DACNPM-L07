import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./style.css";
import { useEffect, useState } from 'react';

const CreateGroupPopup = (props) => {

    const [createGroupMessage, setMessage] = useState(<div />)
    const [inputValue1, setInput1] = useState("")
    const [inputValue2, setInput2] = useState("")

    const successMessage = () => {
        setMessage(<div className={style.successMessage}>Gửi yêu cầu thành công!!</div>)
        setInput1("")
        setInput2("")
    }
    const handleUserInput1 = (e) => {
        setInput1(e.target.value)
    }
    const handleUserInput2 = (e) => {
        setInput2(e.target.value)
    }
    useEffect(() => {
        setTimeout( () => setMessage(<div />), 5000)
        
    }, [createGroupMessage])
    return (
        <div className={style.createGroupPopup}>
            <div className={style.title}>
                <div>Gửi yêu cầu tạo nhóm mới</div>
                <I icon={faTimes} className={style.closeButton} onClick={props.close}/>
            </div>
            <div className={style.groupName}>
                <div>Tên nhóm</div>
                <input className={style.input} value={inputValue1} onChange={handleUserInput1} placeholder={"Tên nhóm muốn tạo"}></input>
            </div>
            <div className={style.groupDescription}>
                <div>Mô tả / Lý do</div>
                <input className={style.input} value={inputValue2} onChange={handleUserInput2}  placeholder={"Mô tả nhóm và Lý do muốn tạo nhóm"}></input>
            </div>
            {createGroupMessage}
            <div className={style.sendButton} onClick={successMessage}>
                <span>Gửi yêu cầu</span>
            </div>
        </div>
    )
}
export default CreateGroupPopup;