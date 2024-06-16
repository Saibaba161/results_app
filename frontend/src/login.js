import { useState } from "react"
import { useLogin } from "./hooks/useLogin"

const Login = () => {
    const [reg_id, setReg_id] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState()

    const {login, error, isLoading} = useLogin();
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const results = await login(reg_id, password)
        
        if (results && results.user) {
            setData(results.user);
        }
    }

    return(
        <div>
        <div className="login_form">
            <form className="login" onSubmit={handleSubmit}>

            <label>Roll Number:</label>
            <input 
                onChange={(e) => setReg_id(e.target.value)}
                value={reg_id}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading} type="submit">Log In</button>
            {error && <div className="error">{error}</div>}
            </form>
        </div>

        <div className="results">
        {data && (
                    <table className="styled-table">
                        <caption>Results for {data.reg_id}</caption>
                        <thead>
                            <tr>
                                <td>Subject 1</td>
                                <td>{data.sub1}</td>
                            </tr>
                            <tr>
                                <td>Subject 2</td>
                                <td>{data.sub2}</td>
                            </tr>
                            <tr>
                                <td>Subject 3</td>
                                <td>{data.sub3}</td>
                            </tr>
                            <tr>
                                <td>Subject 4</td>
                                <td>{data.sub4}</td>
                            </tr>
                            <tr>
                                <td>Subject 5</td>
                                <td>{data.sub5}</td>
                            </tr>
                        </thead>
                    </table>
        )}
        </div>
        </div>
    )
}

export default Login