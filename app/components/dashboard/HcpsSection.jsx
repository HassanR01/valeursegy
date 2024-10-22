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
              <th>Mobile </th>
              <th>Email</th>
              <th>Speciality</th>
              <th className='rounded-tr-xl'>Medical ID</th>
            </tr>
          </thead>
          <tbody>
            {hcps.map((hcp, ind) => (
              <tr className='text-whiteColor cursor-pointer hover:bg-priColor duration-700' key={ind}>
                <td>{hcp.name}</td>
                <td>{hcp.phone}</td>
                <td>{hcp.email}</td>
                <td>{hcp.speciality}</td>
                <td>{hcp.medId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {hcps.length === 0 && (<h2 className='text-xl text-whiteColor font-bold my-4'>No HCP Sign in Yet</h2>)}
      </div>
    </>
  )
}
