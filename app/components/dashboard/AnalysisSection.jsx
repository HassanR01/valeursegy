'use client'
import React from 'react'

export default function AnalysisSection({ hcps, blogs, meetings, products }) {

  return (
    <div className="analysisList w-full flex flex-wrap items-center justify-center my-10 p-4">
      <div className="card p-4 w-[300px] flex flex-col items-start justify-center m-4 rounded-tl-xl rounded-br-xl bg-whiteColor">
        <h2 className='text-2xl font-bold text-mainColor '>HCPs</h2>
        <div className="count flex items-end text-slate-400 justify-center">
          <h3 className='text-3xl font-medium mr-2'>{hcps.length}</h3>
          <h4 className='text-lg font-medium'>Visitors</h4>
        </div>
        <div className="garn w-full h-4 bg-green-500 mt-2 rounded-xl"></div>
      </div>

      <div className="card p-4 w-[300px] flex flex-col items-start justify-center m-4 rounded-tl-xl rounded-br-xl bg-whiteColor">
        <h2 className='text-2xl font-bold text-mainColor '>Blogs</h2>
        <div className="count flex items-end text-slate-400 justify-center">
          <h3 className='text-3xl font-medium mr-2'>{blogs.length}</h3>
          <h4 className='text-lg font-medium'>blog</h4>
        </div>
        <div className="garn w-full h-4 bg-blue-500 mt-2 rounded-xl"></div>
      </div>

      <div className="card p-4 w-[300px] flex flex-col items-start justify-center m-4 rounded-tl-xl rounded-br-xl bg-whiteColor">
        <h2 className='text-2xl font-bold text-mainColor '>Meetings</h2>
        <div className="count flex items-end text-slate-400 justify-center">
          <h3 className='text-3xl font-medium mr-2'>{meetings.length}</h3>
          <h4 className='text-lg font-medium'>Meetings</h4>
        </div>
        <div className="garn w-full h-4 bg-pink-500 mt-2 rounded-xl"></div>
      </div>
      <div className="card p-4 w-[300px] flex flex-col items-start justify-center m-4 rounded-tl-xl rounded-br-xl bg-whiteColor">
        <h2 className='text-2xl font-bold text-mainColor '>Products</h2>
        <div className="count flex items-end text-slate-400 justify-center">
          <h3 className='text-3xl font-medium mr-2'>{products.length}</h3>
          <h4 className='text-lg font-medium'>Products</h4>
        </div>
        <div className="garn w-full h-4 bg-red-500 mt-2 rounded-xl"></div>
      </div>
    </div>
  )
}
