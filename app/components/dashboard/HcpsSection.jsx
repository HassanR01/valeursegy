'use client'
import React from 'react'

export default function HcpsSection({ hcps }) {
  // name, email, medId, phone, speciality
  return (
    <>
      <div className="hcpsList w-full flex flex-col items-center justify-center">
        <table className='w-full'>
          <thead>
            <tr>
              <th className='rounded-tl-xl'>Name</th>
              <th>Email</th>
              <th>Medical ID</th>
              <th>Phone</th>
              <th className='rounded-tr-xl'>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {hcps.map((hcp, ind) => (
              <tr className='text-whiteColor cursor-pointer hover:bg-priColor duration-700' key={ind}>
                <td>{hcp.name}</td>
                <td>{hcp.email}</td>
                <td>{hcp.medId}</td>
                <td>{hcp.phone}</td>
                <td>{hcp.speciality}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {hcps.length === 0 && (<h2 className='text-xl text-whiteColor font-bold my-4'>No HCP Sign in Yet</h2>)}
      </div>
    </>
  )
}
