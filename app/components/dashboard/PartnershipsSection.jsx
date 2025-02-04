'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function PartnershipsSection({ partners }) {
  const [addForm, setAddForm] = useState(false)
  const [alert, setAlert] = useState('')

  // News Schema
  const [name, setname] = useState('')
  const [nameAr, setnameAr] = useState('')
  const [logo, setlogo] = useState('')
  const [description, setdescription] = useState('')
  const [descriptionAr, setdescriptionAr] = useState('')
  const [link, setlink] = useState('')
  const [type, settype] = useState('')

  // Add News
  const handleAddPartner = async (e) => {
    e.preventDefault()
    setAlert('Processing...')

    if (name && nameAr && description && descriptionAr && link && logo && type) {

      try {
        const res = await fetch('/api/partnerships', {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, nameAr, logo, description, descriptionAr, link, type })
        })

        if (res.ok) {
          setpartnerId('')
          setname('')
          setnameAr('')
          setlogo('')
          setdescription('')
          setdescriptionAr('')
          setlink('')
          settype('')
          setAlert('Added Successfully')
        } else {
          setAlert('Technecal Error')
        }

      } catch (error) {
        console.log(error);

      }
    } else {
      setAlert("All Data Required")
    }
  }

  // Edit partner 
  const [editForm, setEditForm] = useState(false)
  const [partnerId, setpartnerId] = useState('')

  const HandleEditPartner = async (e) => {
    e.preventDefault()
    setAlert('Processing...')

    if (name && nameAr && description && descriptionAr && link && logo && type) {
      try {
        const res = await fetch(`/api/partnerships/${partnerId}`, {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, nameAr, logo, description, descriptionAr, link, type })
        })

        if (res.ok) {
          setAlert("Edit Successfully")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setAlert('All Data Required')
    }
  }

  // Handel Delete Partner 
  const DeletePartner = async () => {
    setAlert('Delete Processing')
    const confirmed = confirm('Are you sure ? ')
    if (confirmed) {
      
      try {
        const res = await fetch(`/api/partnerships/${partnerId}`, {
          method: "DELETE"
        })

        if (res.ok) {
          location.reload()
        }
      } catch (error) {
        setAlert(error)  
      }

    } else {
      setAlert('')
    }
  }

  // name,nameAr, logo,description, descriptionAr, link, type
  return (
    <>
      <div onClick={() => {
        setAddForm(!addForm)
        setEditForm(false)
        setpartnerId("")
        setname('')
        setnameAr('')
        setlogo('')
        setdescription('')
        setdescriptionAr('')
        setlink('')
        settype('')
      }} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>

      {addForm ? (
        <>
          <div className="form w-full flex flex-col items-center justify-center">
            <form className='flex flex-col items-center justify-center' onSubmit={editForm ? HandleEditPartner : handleAddPartner} onChange={() => setAlert('')}>
              <div className="fRow flex items-center justify-around">
                <div className="name flex flex-col items-start justify-center m-4">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div className="logo flex flex-col items-start justify-center m-4">
                  <label htmlFor="logo">Logo:</label>
                  <input type="text" name="logo" id="logo" value={logo} onChange={(e) => setlogo(e.target.value)} placeholder='Link of Logo From Cloudinarylink' />
                </div>
                <div className="link flex flex-col items-start justify-center m-4">
                  <label htmlFor="link">Link Partner website:</label>
                  <input type="text" name="link" id="link" value={link} onChange={(e) => setlink(e.target.value)} />
                </div>
              </div>
              <div className="sRow flex items-center justify-around">
                <div className="nameAr flex flex-col items-start justify-center m-4">
                  <label htmlFor="nameAr">Name Arabic:</label>
                  <input type="text" name="nameAr" id="nameAr" value={nameAr} onChange={(e) => setnameAr(e.target.value)} />
                </div>
                <div className="type flex flex-col items-start justify-center m-4">
                  <label htmlFor="type">Type of Partner:</label>
                  <select name="type" id="type" value={type} onChange={(e) => settype(e.target.value)}>
                    <option value="">Company or Clinic</option>
                    <option value="Company">Company</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Clinic">Clinic</option>
                  </select>
                </div>
              </div>
              <div className="3Row w-full flex flex-col items-center justify-around">
                <div className="Description w-full flex flex-col items-start justify-center m-4">
                  <label htmlFor="description">Description English:</label>
                  <textarea name="description" id="description" value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
                </div>
                <div dir='rtl' className="Description w-full flex flex-col items-start justify-center m-4">
                  <label htmlFor="descriptionAr">الوصف بالعربية:</label>
                  <textarea name="descriptionAr" id="descriptionAr" value={descriptionAr} onChange={(e) => setdescriptionAr(e.target.value)}></textarea>
                </div>
              </div>
              <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
              <button className='btnForm'>{editForm ? "Edit" : "Add"} Partner</button>
            </form>

            {editForm && <div className="btnForm hover:bg-red-500 cursor-pointer" onClick={() => DeletePartner()}>Delete Partner</div>}
          </div>
        </>
      ) : (
        <>
          <div className="PartnersList flex flex-wrap items-center justify-center">
            {partners.map((partner, ind) => (
              <div onClick={() => {
                setAddForm(true)
                setEditForm(true)
                setpartnerId(partner._id)
                setname(partner.name)
                setnameAr(partner.nameAr)
                setlogo(partner.logo)
                setdescription(partner.description)
                setdescriptionAr(partner.descriptionAr)
                setlink(partner.link)
                settype(partner.type)
              }} key={ind} className="partner cursor-pointer hover:shadow-xl w-[200px] m-1 py-4 flex items-center justify-center flex-col rounded-xl duration-500">
                <Image src={partner.logo} width={100} height={100} alt={partner.name} />
                <h4 className='my-2 font-bold text-xl'>{partner.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
