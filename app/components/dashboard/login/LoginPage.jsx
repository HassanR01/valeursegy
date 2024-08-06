'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../../main/Loading'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const GetUsers = async () => {
            try {
                const resUser = await fetch('/api/users', {
                    cache: "no-store"
                })

                const Users = await resUser.json()
                setUsers(Users.users)

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        GetUsers()
    }, [])

    if (!isLoading) {

        const FilterUsers = users.filter(user => {
            const matchedUser = !username || user.username === username

            return matchedUser
        })

        const HandelSignInForm = (e) => {
            e.preventDefault()

            if (FilterUsers.length !== 0 && FilterUsers[0].username === username) {
                if (FilterUsers[0].password === password) {
                    sessionStorage.setItem("User", JSON.stringify(FilterUsers[0]))
                    location.reload()
                } else {
                    setAlert('Wrong Password')
                }
            } else {
                setAlert('Uesr is not Exist')
            }
        }

        return (
            <>
                <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center flex-col bg-bgColor z-20">
                    <form onSubmit={HandelSignInForm} className='bg-mainColor hover:shadow-2xl duration-700 w-[90%] lg:w-[60%] p-4 rounded-xl text-bgColor'>
                        <div className="inputs flex flex-col items-center justify-center">
                            <div className="username flex flex-col items-start justify-center pb-4">
                                <label htmlFor="username">Username:</label>
                                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Username' />
                            </div>
                            <div className='password flex flex-col items-start justify-center pb-4'>
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your password' />
                            </div>
                        </div>
                        <h4 className='text-red-600 w-full text-center font-semibold text-lg mb-4'>{alert}</h4>
                        <button className='btnForm'>Sign In</button>
                    </form>
                </div>
            </>
        )
    } else {
        return <Loading />
    }
}
