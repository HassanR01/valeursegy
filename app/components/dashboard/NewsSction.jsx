'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState } from 'react'

export default function NewsSction({ news }) {
  const [addForm, setAddForm] = useState(false)
  const [alert, setAlert] = useState('')
  const editor = useRef(null)

  // news Schema
  const [title, settitle] = useState('')
  const [titleAr, settitleAr] = useState('')
  const [keyword, setkeyword] = useState('')
  const [description, setdescription] = useState('')
  const [descriptionAr, setdescriptionAr] = useState('')
  const [date, setdate] = useState('')
  const [images, setimages] = useState([])
  const [details, setdetails] = useState('')
  const [detailsAr, setdetailsAr] = useState('')


  // Images Operations
  // add
  const [image, setimage] = useState('')
  const addImage = () => {
    const updateImages = [...images, image]
    setimages(updateImages)
    setimage('')
  }
  // Delete
  const deleteImage = (id) => {
    const updateImages = [...images]
    updateImages.splice(id, 1)
    setimages(updateImages)
  }


  // Add news
  const handleAdd = async (e) => {
    e.preventDefault()
    setAlert('Processing...')

    try {
      const res = await fetch('/api/news', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, titleAr, keyword, description, descriptionAr, date, images, details, detailsAr })
      })

      if (res.ok) {
        setId('')
        settitle('')
        settitleAr('')
        setkeyword('')
        setdescription('')
        setdescriptionAr('')
        setdate('')
        setimages([])
        setdetails('')
        setdetailsAr('')
        setAlert('Added Successfully')
      } else {
        setAlert('Technecal Error')
      }

    } catch (error) {
      console.log(error);

    }
  }

  // Edit news 
  const [editForm, setEditForm] = useState(false)
  const [Id, setId] = useState('')
  const handleEdit = async (e) => {
    e.preventDefault()
    setAlert('processing...')

    if (title && titleAr && keyword && description && descriptionAr && date && images && details && detailsAr) {
      try {
        const res = await fetch(`/api/news/${Id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ title, titleAr, keyword, description, descriptionAr, date, images, details, detailsAr })
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

  // Delete 
  const handleDelete = async () => {
    setAlert('processing...')
    const confirmed = confirm('Are You Sure? ')

    if (confirmed) {
      try {
        const res = await fetch(`/api/news/${Id}`, {
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


  // titleAr, descriptionAr, detailsAr
  return (
    <>
      <div onClick={() => {
        setAddForm(!addForm)
        setEditForm(false)
        setId('')
        settitle('')
        settitleAr('')
        setkeyword('')
        setdescription('')
        setdescriptionAr('')
        setdate('')
        setimages([])
        setdetails('')
        setdetailsAr('')
      }} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>

      {addForm ? (
        <>
          <form className='flex flex-col items-center justify-center w-full' onSubmit={editForm ? handleEdit : handleAdd} onChange={() => setAlert('')} >
            <h3 className='w-full text-start font-bold text-2xl'>English</h3>
            <div className="fRow">
              <div className="title">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => settitle(e.target.value)} />
              </div>
              <div className="keyword">
                <label htmlFor="keyword">Keywords:</label>
                <input type="text" name="keyword" id="keyword" value={keyword} onChange={(e) => setkeyword(e.target.value)} />
              </div>
              <div className="date">
                <label htmlFor="date">Title:</label>
                <input type="date" name="date" id="date" value={date} onChange={(e) => setdate(e.target.value)} />
              </div>
            </div>
            <div className="fRow">
              <div className="description w-full">
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder='Description For SEO'></textarea>
              </div>
            </div>
            <div className="fRow">
              <div className="image w-full">
                <label htmlFor="image">Image:</label>
                <input type="text" name="image" id="image" value={image} onChange={(e) => setimage(e.target.value)} placeholder='Link Image From Cloudinary' />
              </div>
              <div onClick={() => addImage()} className="btnForm cursor-pointer">Add Image</div>
            </div>
            <div className="images flex items-center justify-center flex-wrap">
              {images.map((image, ind) => (
                <Image onClick={() => deleteImage(ind)} className='m-2 cursor-pointer rounded-xl w-[200px] h-[100px]' src={image} key={ind} width={100} height={80} alt='images' />
              ))}
            </div>
            <div className="text-Editor flex flex-col  w-full">
              <label htmlFor="details">Details English:</label>
              <JoditEditor ref={editor} value={details} onChange={e => setdetails(e)} />
            </div>

            {/* In Arabic Data */}
            <div className="my-10"></div>
            <h3 className='w-full text-start font-bold text-2xl'>Arabic</h3>
            <div dir='rtl' className="fRow">
              <div className="titleAr w-full">
                <label htmlFor='titleAr'>عنوان الخبر:</label>
                <input type="text" name="titleAr" id="titleAr" value={titleAr} onChange={(e) => settitleAr(e.target.value)} />
              </div>
            </div>
            <div dir='rtl' className="fRow">
              <div className="descriptionAr w-full">
                <label htmlFor="descriptionAr">وصف الخبر:</label>
                <textarea name="descriptionAr" id="descriptionAr" value={descriptionAr} onChange={(e) => setdescriptionAr(e.target.value)} placeholder='Description For SEO'></textarea>
              </div>
            </div>
            <div dir='rtl' className="text-Editor flex flex-col  w-full">
              <label>التفاصيل بالعربية:</label>
              <JoditEditor ref={editor} value={detailsAr} onChange={e => setdetailsAr(e)} />
            </div>

            <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
            <button className='btnForm'>{editForm ? "Edit" : "Add"} News</button>
          </form>
          {editForm && <div className="btnForm hover:bg-red-500 cursor-pointer" onClick={() => handleDelete()}>Delete News</div>}
        </>
      ) : (
        <>
          <div className="List w-full flex flex-col items-center justify-center">
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='rounded-tl-xl'>Title</th>
                  <th>Event Date</th>
                  <th>Created At</th>
                  <th className='rounded-tr-xl'>Last Update</th>
                </tr>
              </thead>
              <tbody>
                {news.map((now, ind) => (
                  <tr className='text-whiteColor cursor-pointer hover:bg-priColor duration-700'
                    onClick={() => {
                      setAddForm(true)
                      setEditForm(true)
                      setId(now._id)
                      settitle(now.title)
                      settitleAr(now.titleAr)
                      setkeyword(now.keyword)
                      setdescription(now.description)
                      setdescriptionAr(now.descriptionAr)
                      setdate(now.date)
                      setimages(now.images)
                      setdetails(now.details)
                      setdetailsAr(now.detailsAr)
                    }}
                    key={ind}
                  >
                    <td>{now.title}</td>
                    <td>{new Date(now.date).toLocaleDateString()}</td>
                    <td>{new Date(now.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(now.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {news.length === 0 && (<h2 className='text-xl text-whiteColor font-bold my-4'>No News Added Yet</h2>)}
          </div>
        </>
      )}
    </>
  )
}
