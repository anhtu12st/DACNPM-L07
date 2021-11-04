import './style.sass'
import { Link } from 'react-router-dom'
import InputBox from '../../Screens/Login/InputBox'

const LoginForm = () => {
    <div className="LoginForm">
        <main>
        <div className="container">
          <div className="login">
            <form action method="post">
                <h1>Đăng nhập</h1>
                <InputBox type="text" placeholder="Tên đăng nhập"/>
                <div className="btn-box">
                    <button type="submit">
                    Đăng nhập
                    </button>
                </div>
            </form>
            <div className="to-signup">
                Tạo tài khoản?
                <Link to="/signup" className="signup">
                    Đăng ký
                </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
}
export default LoginForm