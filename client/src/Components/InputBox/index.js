import style from './InputBox.module.sass';

const InputBox = (props) => {
    return (
        <div className={style.InputBox}>
            <input type={props.type} placeholder={props.placeholder} {...props}/>
        </div>
    );
};

export default InputBox;