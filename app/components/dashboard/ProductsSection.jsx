'use client'
import { motion } from 'framer-motion'
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic'
import Link from 'next/link';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState } from 'react'

export default function ProductsSection({ products }) {
  const [addForm, setAddForm] = useState(false)
  const [alert, setAlert] = useState('')


  // Handle Add Product Data
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [nameAr, setnameAr] = useState("")
  const [descriptionAr, setdescriptionAr] = useState("")
  const [sectionsAr, setsectionsAr] = useState([])
  const [sections, setSections] = useState([])
  const [subTitle, setSubTitle] = useState('')
  const [image, setimage] = useState('')
  const [text, setText] = useState('')
  const [subTitleAr, setSubTitleAr] = useState('')
  const [textAr, setTextAr] = useState('')
  const [model, setmodel] = useState('')
  const editor = useRef(null)


  const updateSections = () => {
    if (subTitle && text) {
      if (editSection) {
        const updateSections = [...sections]
        updateSections[sectionIndex] = { subTitle, text }
        setSections(updateSections)
        setSubTitle('')
        setText('')
        setEditSection(false)
        setSectionIndex(null)
      } else {
        const section = { subTitle, text }
        const updateSections = [...sections, section]
        setSections(updateSections)
        setSubTitle('')
        setText('')
      }
    }
  }

  const deleteSection = (ind) => {
    const updateSections = [...sections]
    updateSections.splice(ind, 1)
    setSections(updateSections)
  }

  const updateSectionsAr = () => {
    if (subTitleAr && textAr) {
      if (editSectionAr) {
        const updateSections = [...sectionsAr]
        updateSections[sectionIndexAr] = { subTitleAr, textAr }
        setsectionsAr(updateSections)
        setSubTitleAr('')
        setTextAr('')
        setEditSectionAr(false)
        setSectionIndexAr(null)
      } else {
        const section = { subTitleAr, textAr }
        const updateSections = [...sectionsAr, section]
        setsectionsAr(updateSections)
        setSubTitleAr('')
        setTextAr('')
      }
    }
  }

  const deleteSectionAr = (ind) => {
    const updateSections = [...sectionsAr]
    updateSections.splice(ind, 1)
    setsectionsAr(updateSections)
  }

  const [editSection, setEditSection] = useState(false)
  const [sectionIndex, setSectionIndex] = useState()
  const [editSectionAr, setEditSectionAr] = useState(false)
  const [sectionIndexAr, setSectionIndexAr] = useState()



  const handleAddProduct = async (e) => {
    e.preventDefault()
    setAlert('Processing..')
    if (name && description && sections) {
      try {
        const res = await fetch(`/api/products`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, description, sections, nameAr, image, descriptionAr, sectionsAr })
        })

        if (res.ok) {
          setAlert('Added Successfully')
          setname('')
          setdescription('')
          setmodel('')
          setSections([])
          setnameAr('')
          setimage('')
          setdescription('')
          setsectionsAr([])
        }

      } catch (error) {
        console.log(error)
      }
    } else {
      setAlert('All Data Required')
    }

  }


  // Handle Edit Products
  const [editForm, setEditForm] = useState(false)
  const [productId, setproductId] = useState('')


  const HandleEditProduct = async (e) => {
    e.preventDefault()
    setAlert('Processing.. ')

    if (name && description && sections && image) {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, description, model, sections, nameAr, image, descriptionAr, sectionsAr })
        })

        if (res.ok) {
          setAlert('Editted Successfully')
          location.reload()
        }

      } catch (error) {
        console.log(error)
      }
    } else {
      setAlert('All Data Required')
    }

  }


  // Delete Product
  const DeleteProduct = async () => {
    if (confirm('You will Delete the Product')) {
      setAlert('Processing..')
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "DELETE"
        })

        if (res.ok) {
          setAlert('Deleted Successfully')
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }

    }
  }


  const ChangeTheIndexOfSectionToNextIndex = (sec, ind) => {
    const updateSections = [...sections]
    updateSections.splice(ind, 1)
    updateSections.splice(ind + 1, 0, sec)
    setSections(updateSections)
  }

  const ChangeTheIndexOfSectionToPrevIndex = (sec, ind) => {
    const updateSections = [...sections]
    updateSections.splice(ind, 1)
    updateSections.splice(ind - 1, 0, sec)
    setSections(updateSections)
  }

  const ChangeTheIndexOfSectionToNextIndexAr = (sec, ind) => {
    const updateSections = [...sectionsAr]
    updateSections.splice(ind, 1)
    updateSections.splice(ind + 1, 0, sec)
    setsectionsAr(updateSections)
  }

  const ChangeTheIndexOfSectionToPrevIndexAr = (sec, ind) => {
    const updateSections = [...sectionsAr]
    updateSections.splice(ind, 1)
    updateSections.splice(ind - 1, 0, sec)
    setsectionsAr(updateSections)
  }

  // name, description, model, sections, nameAr, descriptionAr, sectionsAr
  return (
    <>
      <div onClick={() => {
        setAddForm(!addForm)
        setEditForm(false)
        setproductId('')
        setname('')
        setdescription('')
        setnameAr('')
        setdescriptionAr('')
        setsectionsAr([])
        setSections([])
        setmodel('')
      }} className={`ShowBtn z-10 fixed bottom-5 right-5 m-3 p-3 cursor-pointer bg-whiteColor rounded-xl ${addForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>


      {addForm ? (
        <>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            onChange={() => setAlert('')}
            onSubmit={editForm ? HandleEditProduct : handleAddProduct}
            className='w-full flex items-center justify-center flex-col'
          >
            <div className="fRow">
              <div className="name">
                <label htmlFor="name">Name of The Product: </label>
                <input type="text" name="name" id="name" placeholder='Name of The Product' value={name} onChange={(e) => setname(e.target.value)} />
              </div>
              <div className="image">
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" id="image" value={image} onChange={(e) => setimage(e.target.value)} placeholder='Image From Cloudinary' />
              </div>
              <div className="model">
                <label htmlFor="model">Choose Model: </label>
                <select name="model" id="model" value={model} onChange={(e) => setmodel(e.target.value)}>
                  <option value="">Choose 3D Model</option>
                  <option value="So-Check">So-Check</option>
                  <option value="Gniom-Check">Gniom-Check</option>
                  <option value="Fusion-DNA">Fusion-DNA</option>
                  <option value="Milta-Technology">Milta-Technology</option>
                  <option value="Fusion-Pills">Fusion-Pills</option>
                  <option value="Fusion-Vials">Fusion-Vials</option>
                  <option value="Bio-print">Bio-print</option>
                </select>
              </div>
            </div>
            <div className="fRow">
              <div className="description w-full">
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description" placeholder='Description For SEO' value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
              </div>
            </div>

            <div className="sections w-full px-2">
              {sections.map((section, ind) => (
                <div className="section text-whiteColor min-h-60 my-4 w-full relative border-b-2 p-2 py-8" key={ind}>
                  {/* Sction Number */}
                  <h2 className='text-xl flex justify-center items-center absolute -top-2 left-2 w-8 h-8 bg-gray-300 rounded-full font-semibold text-whiteColor'>{ind + 1}</h2>
                  {/* Section Title */}
                  <h2 className='text-xl font-semibold text-whiteColor'>{section.subTitle}</h2>
                  <p className='w-[90%]'>{HTMLReactParser(section.text)}</p>
                  <div className='absolute top-0 right-0 flex flex-col items-center justify-center'>
                    <div onClick={() => ChangeTheIndexOfSectionToPrevIndex(section, ind)} className="delete m-1 p-3 cursor-pointer rounded-xl text-green-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> </svg></div>
                    <div onClick={() => deleteSection(ind)} className="delete m-1 p-3 cursor-pointer bg-whiteColor rounded-xl text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></div>
                    <Link href={"#editEn"} onClick={() => {
                      setEditSection(true)
                      setSubTitle(section.subTitle)
                      setText(section.text)
                      setSectionIndex(ind)
                    }} className="edit m-1 p-3 cursor-pointer bg-whiteColor rounded-xl text-green-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
                    </Link>
                    <div onClick={() => ChangeTheIndexOfSectionToNextIndex(section, ind)} className="delete m-1 p-3 cursor-pointer rounded-xl text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></div>
                  </div>
                </div>
              ))}
            </div>

            <div id='editEn' className="sectionAdd my-4 w-full px-2">
              <div className="subtitle my-4">
                <label htmlFor="subTitle">Sub Title for Section: </label>
                <input type="text" name="subtitle" id="subTitle" placeholder='SubTitle for Section in Product' value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
              </div>
              <JoditEditor ref={editor} value={text} onChange={e => setText(e)} />
              <div className="btnForm cursor-pointer" onClick={() => updateSections()}>{editSection ? "Edit" : "Add"} Section</div>
            </div>

            <h2 className='text-2xl font-medium mb-2'>Arabic Sections</h2>

            <div className="fRow">
              <div className="name">
                <label htmlFor="name">Name of The Product in Arabic: </label>
                <input type="text" name="name" id="name" placeholder='Name of The Product in Arabic' value={nameAr} onChange={(e) => setnameAr(e.target.value)} />
              </div>
            </div>

            <div className="fRow">
              <div className="description w-full">
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description" placeholder='Description For SEO in Arabic' value={descriptionAr} onChange={(e) => setdescriptionAr(e.target.value)}></textarea>
              </div>
            </div>

            <div className="sectionsAr w-full px-2" dir='rtl'>
              {sectionsAr.map((section, ind) => (
                <div className="section text-whiteColor my-4 p-2 min-h-60 py-12 w-full relative border-b-2" key={ind}>
                  <h2 className='text-xl flex justify-center items-center absolute -top-1 right-2 w-8 h-8 bg-gray-300 rounded-full font-semibold text-whiteColor'>{ind + 1}</h2>
                  <h2 className='text-xl font-semibold text-whiteColor'>{section.subTitleAr}</h2>
                  <p className='w-[90%]'>{HTMLReactParser(section.textAr)}</p>
                  <div className='absolute top-0 left-0 flex flex-col items-center justify-center'>
                    <div onClick={() => ChangeTheIndexOfSectionToPrevIndexAr(section, ind)} className="delete p-3 m-1 cursor-pointer rounded-xl text-green-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> </svg></div>
                    <div onClick={() => deleteSectionAr(ind)} className="delete p-3 m-1 cursor-pointer bg-whiteColor rounded-xl text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></div>
                    <Link href={'#editAr'} onClick={() => {
                      setEditSectionAr(true)
                      setSubTitleAr(section.subTitleAr)
                      setTextAr(section.textAr)
                      setSectionIndexAr(ind)
                    }}
                      className="edit p-3 m-1 cursor-pointer bg-whiteColor rounded-xl text-green-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
                    </Link>
                    <div onClick={() => ChangeTheIndexOfSectionToNextIndexAr(section, ind)} className="delete p-3 m-1 cursor-pointer rounded-xl text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></div>
                  </div>
                </div>
              ))}
            </div>

            <div id='editAr' className="sectionAddAr my-4 w-full px-2" dir='rtl'>
              <div className="subtitle my-4">
                <label htmlFor="subTitle">العنوان الفرعي للموضوع: </label>
                <input type="text" name="subtitle" id="subTitle" placeholder='Arabic subTitle for Section in Product' value={subTitleAr} onChange={(e) => setSubTitleAr(e.target.value)} />
              </div>
              <JoditEditor ref={editor} value={textAr} onChange={e => setTextAr(e)} />
              <div className="btnForm cursor-pointer" onClick={() => updateSectionsAr()}>{editSectionAr ? "تعديل" : "إضافة"} الموضوع</div>
            </div>


            <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
            <button className="btnForm">{editForm ? "Edit Product" : "Add Product"}</button>

          </motion.form>
          {editForm && (<button onClick={() => DeleteProduct()} className="btnDelete">Delete Product</button>)}

        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="ProductsList py-8 w-full flex flex-wrap items-center justify-center"
          >
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Sections</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, ind) => (
                  <tr
                    onClick={() => {
                      setEditForm(true)
                      setAddForm(true)
                      setproductId(product._id)
                      setname(product.name)
                      setmodel(product.model)
                      setdescription(product.description)
                      setSections(product.sections)
                      setnameAr(product.nameAr)
                      setimage(product.image)
                      setdescriptionAr(product.descriptionAr)
                      setsectionsAr(product.sectionsAr)
                      console.log(product)
                    }}
                    className='text-whiteColor cursor-pointer hover:bg-priColor duration-700' key={ind}
                  >
                    <td>{product.name}</td>
                    <td>{product.model}</td>
                    <td>{product.sections.length} Sections</td>
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
