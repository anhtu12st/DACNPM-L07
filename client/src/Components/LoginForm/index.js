import style from './LoginForm.module.sass'
import { Link } from 'react-router-dom'
import InputBox from '../InputBox'
import { useState } from 'react';
import { loginUser } from '../../Services/User';
import { useUserContext } from '../../Contexts/UserContext';

const LoginForm = () => {
    const { setUserState } = useUserContext();
    const [error, setError] = useState("");
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleLogin = async (e) => {
        try {
            const { token, userInfo } = await loginUser(form);
            setUserState({ token, userInfo })
        } catch (error) {
            setError(error.response?.data?.message || "Unexpected error")
        }
    }

    return (
        <div className={style.LoginForm}>
            <div className={style.container}>
                <div className={style.login}>
                    <div>
                        <h1>Đăng nhập</h1>
                        <InputBox type="text" placeholder="Tên đăng nhập" name="username" onChange={handleChange} value={form['email']} />
                        <InputBox type="password" placeholder="Mật khẩu" name="password" onChange={handleChange} value={form['password']} />
                        {error}
                        <div className={style.btnBox}>
                            <button to="/" className={style.button} onClick={handleLogin}>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
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