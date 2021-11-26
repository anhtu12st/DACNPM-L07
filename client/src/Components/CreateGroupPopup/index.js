import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import style from "./CreateGroupPopup.module.sass";
import { useEffect, useState } from 'react';
import { createGroup } from '../../Services/Group';

const CreateGroupPopup = (props) => {

    const [createGroupMessage, setMessage] = useState(<div />)
    const [error, setError] = useState("");
    const [form, setForm] = useState({});
    
    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    useEffect(() => {
        setTimeout( () => setMessage(<div />), 5000)
        
    }, [createGroupMessage])

    const handleCreate = async (e) => {
        try {
            setMessage(<div className={style.successMessage}>Gửi yêu cầu thành công!!</div>)
            await createGroup(form);
        } catch (error) {
            setError(error.response?.data?.message || "Unexpected error")
        }
    }
    return (
        <div className={style.createGroupPopup}>
            <div className={style.title}>
                <div>Gửi yêu cầu tạo nhóm mới</div>
                <I icon={faTimes} className={style.closeButton} onClick={props.close}/>
            </div>
            <div className={style.groupName}>
                <div>Tên nhóm</div>
                <input className={style.input} name={"title"} value={form["title"]} onChange={handleUserInput} placeholder={"Tên nhóm muốn tạo"}></input>
            </div>
            <div className={style.groupDescription}>
                <div>Mô tả / Lý do</div>
                <input className={style.input} name={"desc"} value={form["desc"]} onChange={handleUserInput}  placeholder={"Mô tả nhóm và Lý do muốn tạo nhóm"}></input>
            </div>
            {createGroupMessage}
            <div className={style.sendButton} onClick={handleCreate}>
                <span>Gửi yêu cầu</span>
            </div>
        </div>
    )
}
export default CreateGroupPopup;