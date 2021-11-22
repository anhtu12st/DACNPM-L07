import style from './SignupForm.module.sass'
import { Link } from 'react-router-dom'
import InputBox from '../InputBox'
import { useUserContext } from '../../Contexts/UserContext';
import { useState } from 'react';
import { signupUser } from '../../Services/User';

const SignupForm = () => {
    const { setUserState } = useUserContext();
    const [error, setError] = useState("");
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSignup = async (e) => {
        try {
            const { token, userInfo } = await signupUser(form);
            setUserState({ token, userInfo })
        } catch (error) {
            setError(error.response?.data?.message || "Unexpected error")
        }
    }

    return (
        <div className={style.SignupForm}>
            <div className={style.container}>
                <div className={style.signup}>
                    <div>
                        <h1>Đăng ký</h1>
                        <InputBox type="email" placeholder="Email" name="email" onChange={handleChange} value={form['email']} />
                        <InputBox type="text" placeholder="Tên đăng nhập" name="username" onChange={handleChange} value={form['username']}  />
                        <InputBox type="password" placeholder="Mật khẩu" name="password" onChange={handleChange} value={form['password']}  />
                        <InputBox type="password" placeholder="Nhập lại mật khẩu" name="password_retype" onChange={handleChange} value={form['password_retype']}  />
                        {error}
                        <div className={style.btnBox}>
                            <button to="/" className={style.button} onClick={handleSignup}>
                                Đăng ký
                            </button>
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