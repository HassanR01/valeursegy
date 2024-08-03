'use client'
import React from 'react'

export default function MeetingSection({ meetings }) {
  // name, email, phone, position, medId, message

  return (
    <>
      <div className="meetingsList w-full flex flex-col items-center justify-center">
        <table className='w-full'>
          <thead>
            <tr>
              <th className='rounded-tl-xl'>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Medical ID</th>
              <th className='rounded-tr-xl'>Message</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meetings, ind) => (
              <tr key={ind}>
                <td>{meetings.name}</td>
                <td>{meetings.email}</td>
                <td>{meetings.phone}</td>
                <td>{meetings.position}</td>
                <td>{meetings.medId}</td>
                <td>{meetings.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {meetings.length === 0 && (<h2 className='text-xl font-bold text-whiteColor my-4'>No Meeting Orderd Yet</h2>)}
      </div>
    </>
  )
}
