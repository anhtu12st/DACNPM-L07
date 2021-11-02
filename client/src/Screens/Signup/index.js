import './index.sass'

const Signup = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="signup">
            <form action method="post">
              <h1>Đăng ký</h1>
              <div className="input-box">
                <i />
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-box">
                <i />
                <input type="text" placeholder="Tên đăng nhập" />
              </div>
              <div className="input-box">
                <i />
                <input type="password" placeholder="Mật khẩu" />
              </div>
              <div className="input-box">
                <i />
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </div>
              <div className="btn-box">
                <button type="submit">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signup
