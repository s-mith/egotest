import React, { useState } from 'react' 
import StyledButton from '../styledButton';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {

        const response = await fetch(`https://`+ process.env.CAPI +`/api/user`, {
            method: "POST",
            body: JSON.stringify({ name: username, password: password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        console.log(data)

    }

    return (
        <div className="bg-leafpink-500 p-4 flex flex-col items-center space-y-4 ">
            <input
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-leafpink-100 p-2 border border-leafyellow text-leafyellow w-full"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-leafpink-100 p-2 border border-leafyellow text-leafyellow w-full"
            />
            <StyledButton text="Sign Up!" onclick={handleSubmit} />
        </div>
    )
}


export default SignUp