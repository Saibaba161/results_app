import { useState } from "react"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const login = async (reg_id, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://result.uncalledinnovators.com/api/user/login', {mode: 'cors'},
        {
            method: 'POST',
            body: JSON.stringify({reg_id, password}),
            headers: {'Content-Type': 'application/json'},
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
            return null
        }

        if(response.ok) {
            setIsLoading(false)
            return json
        }
    }
    return {login, isLoading, error}
}
