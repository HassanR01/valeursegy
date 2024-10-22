'use client'
import dynamic from 'next/dynamic'
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState } from 'react'

export default function CareersSection({ careers }) {
  const [addForm, setAddForm] = useState(false)
  const [alert, setAlert] = useState('')
  const editor = useRef(null)

  // Careers Schema
  const [title, settitle] = useState('')
  const [keywords, setkeywords] = useState('')
  const [jobTitle, setjobTitle] = useState('')
  const [jobType, setjobType] = useState('')
  const [experience, setexperience] = useState('')
  const [location, setlocation] = useState('')
  const [details, setdetails] = useState('')
  const [applying, setapplying] = useState('')
  const [status, setstatus] = useState('')
  const [titleAr, settitleAr] = useState('')
  const [jobTitleAr, setjobTitleAr] = useState('')
  const [jobTypeAr, setjobTypeAr] = useState('')
  const [detailsAr, setdetailsAr] = useState('')


  // Add News
  const handleAddCareers = async (e) => {
    e.preventDefault()
    setAlert('Processing...')

    if (title && keywords && jobTitle && jobType && experience && location && details && applying && status && titleAr && jobTitleAr && jobTypeAr && detailsAr) {

      try {
        const res = await fetch('/api/careers', {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ title, keywords, jobTitle, jobType, experience, location, details, applying, status, titleAr, jobTitleAr, jobTypeAr, detailsAr })
        })

        if (res.ok) {
          setcareersId('')
          settitle('')
          setkeywords('')
          setjobTitle('')
          setjobType('')
          setexperience('')
          setlocation('')
          setdetails('')
          setapplying('')
          setstatus('')
          settitleAr('')
          setjobTitleAr('')
          setjobTypeAr('')
          setdetailsAr('')
          setAlert('Added Successfully')
        } else {
          setAlert('Technecal Error')
        }

      } catch (error) {
        console.log(error);

      }
    } else {
      setAlert('All Data Required')
    }
  }

  // Edit News 
  const [editForm, setEditForm] = useState(false)
  const [careersId, setcareersId] = useState('')

  const HandleEditCareer = async (e) => {
    e.preventDefault()
    setAlert('processing...')

    if (title && keywords && jobTitle && jobType && experience && location && details && applying && status && titleAr && jobTitleAr && jobTypeAr && detailsAr) {
      try {
        const res = await fetch(`/api/careers/${careersId}`, {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ title, keywords, jobTitle, jobType, experience, location, details, applying, status, titleAr, jobTitleAr, jobTypeAr, detailsAr })
        })

        if (res.ok) {
          setAlert('Edit Successfully')
        }

      } catch (error) {
        console.log(error);
      }
    } else {
      setAlert('All Data Required')
    }
  }

  // Delete Job
  const DeleteJob = async () => {
    const confirmed = confirm('Are you sure')
    setAlert('processing...')

    if (confirmed) {
      try {
        const res = await fetch(`/api/careers/${careersId}`, {
          method: "DELETE"
        })

        if (res.ok) {
          window.location.reload()
        }
      } catch (error) {
        console.log(error);

      }
    } else {
      setAlert('')
    }
  }


  //   titleAr, jobTitleAr, jobTypeAr, detailsAr
  return (
    <>
      <div onClick={() => {
        setAddForm(!addForm)
        setEditForm(false)
        setcareersId('')
        settitle('')
        setkeywords('')
        setjobTitle('')
        setjobType('')
        setexperience('')
        setlocation('')
        setdetails('')
        setapplying('')
        setstatus('')
        settitleAr('')
        setjobTitleAr('')
        setjobTypeAr('')
        setdetailsAr('')
      }} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>

      {addForm ? (
        <>
          <form className='flex w-full flex-col items-center justify-center p-2' onSubmit={editForm ? HandleEditCareer : handleAddCareers} onChange={() => setAlert('')}>
            <h3 className='w-full text-start font-bold text-2xl'>English</h3>
            <div className="fRow w-full flex flex-wrap items-center justify-around">
              <div className="title">
                <label htmlFor='title'>Title:</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => settitle(e.target.value)} />
              </div>
              <div className="keywords">
                <label htmlFor='keywords'>Keywords:</label>
                <input type="text" name="keywords" id="keywords" value={keywords} onChange={(e) => setkeywords(e.target.value)} />
              </div>
              <div className="jobTitle">
                <label htmlFor='jobTitle'>Job Title:</label>
                <input type="text" name="jobTitle" id="jobTitle" value={jobTitle} onChange={(e) => setjobTitle(e.target.value)} />
              </div>
            </div>
            <div className="fRow w-full flex flex-wrap items-center justify-around">
              <div className="jobType">
                <label htmlFor='jobType'>Job Type:</label>
                <input type="text" name="jobType" id="jobType" value={jobType} onChange={(e) => setjobType(e.target.value)} />
              </div>
              <div className="experience">
                <label htmlFor='experience'>Experiences:</label>
                <input type="text" name="experience" id="experience" value={experience} onChange={(e) => setexperience(e.target.value)} placeholder='Ex: Smart, Hard working, ..etc' />
              </div>
              <div className="location">
                <label htmlFor='location'>Location:</label>
                <input type="text" name="location" id="location" value={location} onChange={(e) => setlocation(e.target.value)} />
              </div>
            </div>
            <div className="fRow w-full flex flex-wrap items-center justify-around">
              <div className="applying">
                <label htmlFor='applying'>Applying Link:</label>
                <input type="text" name="applying" id="applying" value={applying} onChange={(e) => setapplying(e.target.value)} />
              </div>
              <div className="Status">
                <label htmlFor='Status'>Status:</label>
                <select name="status" id="Status" value={status} onChange={(e) => setstatus(e.target.value)}>
                  <option value="">Active or not active</option>
                  <option value="active">Active</option>
                  <option value="NotActive">Not Active</option>
                </select>
              </div>
            </div>
            <div className="text-Editor flex flex-col  w-full">
              <label htmlFor="details">Details English:</label>
              <JoditEditor ref={editor} value={details} onChange={e => setdetails(e)} />
            </div>

            {/* In Arabic Data */}
            <div className="my-10"></div>
            <h3 className='w-full text-start font-bold text-2xl'>Arabic</h3>
            <div className="fRow w-full flex flex-wrap items-center justify-around">
              <div className="titleAr">
                <label htmlFor='titleAr'>عنوان الوظيفة:</label>
                <input type="text" name="titleAr" id="titleAr" value={titleAr} onChange={(e) => settitleAr(e.target.value)} />
              </div>
              <div className="jobTitleAr">
                <label htmlFor='jobTitleAr'>اسم الوظيفة:</label>
                <input type="text" name="jobTitleAr" id="jobTitleAr" value={jobTitleAr} onChange={(e) => setjobTitleAr(e.target.value)} />
              </div>
              <div className="jobTypeAr">
                <label htmlFor='jobTypeAr'>نوع الوظيفة:</label>
                <input type="text" name="jobTypeAr" id="jobTypeAr" value={jobTypeAr} onChange={(e) => setjobTypeAr(e.target.value)} />
              </div>
            </div>

            <div dir='rtl' className="text-Editor flex flex-col w-full mb-10">
              <label htmlFor="details">التفاصيل بالعربية:</label>
              <JoditEditor ref={editor} value={detailsAr} onChange={e => setdetailsAr(e)} />
            </div>
            <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
            <button className='btnForm'>{editForm ? "Edit" : "Add"} Job</button>
          </form>
          {editForm && <div className="btnForm hover:bg-red-500 cursor-pointer" onClick={() => DeleteJob()}>Delete Job</div>}

        </>
      ) : (
        <>
          <div className="JobsList w-full flex flex-col items-center justify-center">
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='rounded-tl-xl'>Title</th>
                  <th>Job Type</th>
                  <th>Location</th>
                  <th className='rounded-tr-xl'>Status</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((career, ind) => (
                  <tr className='text-whiteColor cursor-pointer hover:bg-priColor duration-700'
                    onClick={() => {
                      setAddForm(true)
                      setEditForm(true)
                      setcareersId(career._id)
                      settitle(career.title)
                      setkeywords(career.keywords)
                      setjobTitle(career.jobTitle)
                      setjobType(career.jobType)
                      setexperience(career.experience)
                      setlocation(career.location)
                      setdetails(career.details)
                      setapplying(career.applying)
                      setstatus(career.status)
                      settitleAr(career.titleAr)
                      setjobTitleAr(career.jobTitleAr)
                      setjobTypeAr(career.jobTypeAr)
                      setdetailsAr(career.detailsAr)
                    }}
                    key={ind}
                  >
                    <td>{career.jobTitle}</td>
                    <td>{career.jobType}</td>
                    <td>{career.location}</td>
                    <td className={`${career.status === 'active' ? "bg-green-400" : "bg-red-400"}`}>{career.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {careers.length === 0 && (<h2 className='text-xl text-whiteColor font-bold my-4'>No Jobs Added Yet</h2>)}
          </div>
        </>
      )}
    </>
  )
}
