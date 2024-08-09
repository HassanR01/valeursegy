'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'


export default function UsersSection({ users }) {
  const [addUserForm, setAddUesrForm] = useState(false)
  const [editUserForm, setEditUserForm] = useState(false)
  const [alert, setAlert] = useState("")




  // Add User Operations
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleAddUser = async (e) => {
    e.preventDefault()
    setAlert('Processing ..')

    if (name, username, password, role) {
      try {
        const res = await fetch('/api/users', {
          method: "POST",
          headers: {
            "Content-type" : "application/json"
          },
          body : JSON.stringify({name, username, password, role})
        })

        if (res.ok) {
          setName("")
          setUsername('')
          setPassword('')
          setRole('')
          setAlert('Added Successfully')
        } else {
          setAlert("technical issue")
        }

      } catch (error) {
        console.log(error);
      }
    } else {
      setAlert('All Data Required')
    }

  }

  return (
    <>

      <div onClick={() => setAddUesrForm(!addUserForm)} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addUserForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>

      {addUserForm ? (
        <>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            onChange={() => setAlert('')}
            onSubmit={handleAddUser}
          >
            <div className="fRow">
              <div className="name">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder='Name of User' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="username">
                <label htmlFor="username">Username of User: </label>
                <input type="text" name="username" id="username" placeholder='username to sign in' value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <div className="fRow">
              <div className="password">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password" placeholder='Password of User' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="role">
                <label htmlFor="role">Role of User: </label>
                <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>
            <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
            <button className='btnForm'>Add User</button>
          </motion.form>
        </>
      ) : (
        <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="usersList py-8 w-full flex flex-wrap items-center justify-center"
            >
              <table className='w-full'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, ind) => (
                    <tr className='text-whiteColor cursor-pointer hover:bg-priColor duration-700' key={ind}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </motion.div>
        </>
      )}
    </>
  )
}
