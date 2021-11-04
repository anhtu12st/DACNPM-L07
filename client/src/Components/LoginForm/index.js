import style from './LoginForm.module.sass'
import { Link } from 'react-router-dom'
import InputBox from '../InputBox'

const LoginForm = () => {
    return (
        <div className={style.LoginForm}>
            <div className={style.container}>
                <div className={style.login}>
                    <form action method="post">
                        <h1>Đăng nhập</h1>
                        <InputBox text="text" name="Tên đăng nhập"/>
                        <InputBox text="password" name="Mật khẩu"/>
                        <div className={style.btnBox}>
                            <button type="submit">
                            Đăng nhập
                            </button>
                        </div>
                    </form>
                    <div className={style.toSignup}>
                        Tạo tài khoản?
                        <Link to="/signup" className={style.signup}>
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginForm