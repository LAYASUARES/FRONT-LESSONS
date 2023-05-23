import './login.css'

function Login() {
  return (
    <div>
     <h1 className="login_title">Login</h1>
     <p className="description_login">Insira seus dados para entrar no sistema</p>

     <label htmlFor="email"></label>
     <input type="email" name="email" id="email" />

     <label htmlFor="senha"></label>
     <input type="password" name="password" id="password" />
    </div>
  )
}

export default Login