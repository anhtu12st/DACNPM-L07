import style from './SignupForm.module.sass'
import { Link } from 'react-router-dom'
import InputBox from '../InputBox'

const SignupForm = () => {
    return (
        <div className={style.SignupForm}>
            <div className={style.container}>
                <div className={style.signup}>
                    <form action method="post">
                        <h1>Đăng ký</h1>
                        <InputBox text="text" name="Email"/>
                        <InputBox text="text" name="Tên đăng nhập"/>
                        <InputBox text="password" name="Mật khẩu"/>
                        <InputBox text="password" name="Nhập lại mật khẩu"/>
                        <div className={style.btnBox}>
                            <button type="submit">
                                Đăng ký
                            </button>
                        </div>
                    </form>
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