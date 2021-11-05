import style from './SignupForm.module.sass'
import { Link } from 'react-router-dom'
import InputBox from '../InputBox'

const SignupForm = (props) => {
    return (
        <div className={style.SignupForm}>
            <div className={style.container}>
                <div className={style.signup}>
                    <div>
                        <h1>Đăng ký</h1>
                        <InputBox text="text" name="Email"/>
                        <InputBox text="text" name="Tên đăng nhập"/>
                        <InputBox text="password" name="Mật khẩu"/>
                        <InputBox text="password" name="Nhập lại mật khẩu"/>
                        <div className={style.btnBox}>
                            <Link to="/" className={style.button} onClick={props.SignedUp}>
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                    <div className={style.toLogin}>
                        Đã có tài khoản?
                        <Link to="/login" className={style.login}>
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignupForm