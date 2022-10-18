import "./Login.sass"
import { useState, useEffect, FormEvent, useRef } from 'react'
import { useAuthentication } from "../../hooks/useAuthentication"
import ReCAPTCHA from 'react-google-recaptcha'

type Props = {}

const Login = (props: Props) => {

  const [email, setEmail] = useState <string> ("") 
  const [password, setPassword] = useState <string> ("") 
  const [error, setError] = useState <string> ("")

  // back-end authentication create user
  const { login, error: authError, loading} = useAuthentication();

  // recaptcha
  const captchaRef = useRef <any> (null)

  const handleSubmit = async (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault()

    setError("")
    setEmail("")
    setPassword("")

    const user = {
        email, password
    }

    const res = await login(user)

  };

  useEffect(() => {
    if (authError) {
        setError(authError);
    }
  }, [authError])

  return (
    <div id="div-form-register">
        <h1>Crie uma conta</h1>
            <h3>É rápido e divertido!</h3>
        <form onSubmit={handleSubmit} id="form-register-login">
            <label>
                <span>E-mail:</span>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <ReCAPTCHA 
                sitekey="6LepMIoiAAAAAFhmsaXrdlM0aK6qBHpzYBIe7nSM"
                ref={captchaRef}
            />
            {!loading && <input type="submit" id="Create-account-btn" value="Entrar" />}
            {loading && <button id="Create-account-btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login