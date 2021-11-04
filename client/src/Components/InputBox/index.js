import style from './InputBox.module.sass';

const InputBox = (props) => {
    return (
        <div className={style.InputBox}>
            <input type={props.text} placeholder={props.name}/>
        </div>
    );
};

export default InputBox;