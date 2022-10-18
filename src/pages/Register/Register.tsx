import "./Register.sass"
import { useState, useEffect, FormEvent, useRef } from 'react'
import { useAuthentication } from "../../hooks/useAuthentication"
import ReCAPTCHA from 'react-google-recaptcha'

type Props = {}

const Register = (props: Props) => {

  const [displayName, setDisplayName] = useState <string> ("")  
  const [email, setEmail] = useState <string> ("") 
  const [password, setPassword] = useState <string> ("") 
  const [confirmPassword, setConfirmPassword] = useState <string> ("") 
  const [error, setError] = useState <string> ("")

  // back-end authentication create user
  const { createUser, error: authError, loading} = useAuthentication();

  // recaptcha
  const captchaRef = useRef <any> (null)

  const handleSubmit = async (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault()

    setError("")
    setDisplayName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

    const user = {
        displayName, email, password
    }

    if(password !== confirmPassword) {
        setError("As senhas precisam ser iguais!")
        return
    }

    const res = await createUser(user)

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
                <span>Nome:</span>
                <input 
                    type="text"
                    name="displayName"
                    placeholder="Digite seu nome"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                    required 
                />
            </label>
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
            <label>
            <span>Confirme a Senha:</span>
                <input 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                />
            </label>
            <ReCAPTCHA 
                sitekey="6LepMIoiAAAAAFhmsaXrdlM0aK6qBHpzYBIe7nSM"
                ref={captchaRef}
            />
            {!loading && <input type="submit" id="Create-account-btn" value="Criar Conta" />}
            {loading && <button id="Create-account-btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register