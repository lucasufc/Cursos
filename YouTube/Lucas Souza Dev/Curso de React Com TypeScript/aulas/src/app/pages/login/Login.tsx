import { useCallback, useMemo, useRef, useState } from 'react'

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() =>{
        console.log('Executou')
        return email.length
    }, [email.length])

    const handleEntrar = useCallback(() => {
            console.log(email, password)
        },[])

    return(
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} 
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input ref={inputPasswordRef} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}