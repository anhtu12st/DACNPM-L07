import './style.sass'

const InputBox = (props) => {
    return (
        <div className="input-box">
            <i />
            <input type={props.text} placeholder={props.name} />
        </div>
    );
};

export default InputBox;