'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../components/main/Loading'
import './globals.css'
import DashboardDataGeting from '../components/dashboard/DashboardDataGeting'
import LoginPage from '../components/dashboard/login/LoginPage'

export default function Page() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userStr = sessionStorage.getItem("User")
    if (userStr) {
      setUser(JSON.parse(userStr))
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <>
        {!user ? (
          <>
            <LoginPage />
          </>
        ) : (
          <>
            <div className="dashboard z-20 w-full h-screen flex items-center justify-center ">
              <DashboardDataGeting />
            </div>
          </>
        )}
      </>
    )
  }
}