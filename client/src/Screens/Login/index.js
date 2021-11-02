import './Login.scss'
import { Route } from 'react-router-dom';
import { SignupScreen } from '..';

const LoginScreen = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="login">
            <form action method="post">
              <h1>Đăng nhập</h1>
              <div className="input-box">
                <i />
                <input type="text" placeholder="Tên đăng nhập" />
              </div>
              <div className="input-box">
                <i />
                <input type="password" placeholder="Mật khẩu" />
              </div>
              <div className="btn-box">
                <button type="submit">
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="to-signup">
              Tạo tài khoản?
              <Route path="/signup" component={SignupScreen} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginScreen
