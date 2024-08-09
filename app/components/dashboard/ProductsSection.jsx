'use client'
import { motion } from 'framer-motion'
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic'
import Image from 'next/image';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState } from 'react'

export default function ProductsSection({ products }) {
  const [addForm, setAddForm] = useState(false)
  const [alert, setAlert] = useState('')


  // Handle Add Product Data
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [model, setmodel] = useState('')
  const [sections, setSections] = useState([])
  const [subTitle, setSubTitle] = useState('')
  const [text, setText] = useState('')
  const editor = useRef(null)


  const updateSections = () => {
    if (subTitle && text) {
      const section = { subTitle, text }
      const updateSections = [...sections, section]
      setSections(updateSections)
      setSubTitle('')
      setText('')
    }
  }

  const deleteSection = (ind) => {
    const updateSections = [...sections]
    updateSections.splice(ind, 1)
    setSections(updateSections)
  }


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
          body: JSON.stringify({ name, description, model, sections })
        })

        if (res.ok) {
          setAlert('Added Successfully')
          setname('')
          setdescription('')
          setmodel('')
          setSections([])
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

  const HandleEditProduct = async (e) => {
    e.preventDefault()
    setAlert('Processing.. ')

    if (name && description && sections) {
      try {
        const res = await fetch(`/api/products/${name}`, {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, description, model, sections })
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
        const res = await fetch(`/api/products/${name}`, {
          method:"DELETE"
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



  // name, description, model, sections
  return (
    <>
      <div onClick={() => {
        setAddForm(!addForm)
        setEditForm(false)
      }} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addForm ? "text-green-500" : "text-mainColor"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
      </div>


      {addForm ? (
        <>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
              <div className="model">
                <label htmlFor="model">Choose Model: </label>
                <select name="model" id="model" value={model} onChange={(e) => setmodel(e.target.value)}>
                  <option value="">Choose 3D Model</option>
                  <option value="socheck">So-Check</option>
                  <option value="bioPrint">Bio Print</option>
                  <option value="melta-tech">Melta Tech</option>
                  <option value="tablets">Tablets</option>
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
                <div className="section text-whiteColor my-4 w-full relative" key={ind}>
                  <h2 className='text-xl font-semibold text-whiteColor'>{section.subTitle}</h2>
                  <p>{HTMLReactParser(section.text)}</p>
                  <div onClick={() => deleteSection(ind)} className="delete absolute bottom-0 right-0 p-3 cursor-pointer bg-whiteColor rounded-xl text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></div>
                </div>
              ))}
            </div>

            <div className="sectionAdd my-4 w-full px-2">
              <div className="subtitle my-4">
                <label htmlFor="subTitle">Sub Title for Section: </label>
                <input type="text" name="subtitle" id="subTitle" placeholder='SubTitle for Section in Product' value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
              </div>
              <JoditEditor ref={editor} value={text} onChange={e => setText(e)} />
              <div className="btnForm cursor-pointer" onClick={() => updateSections()}>Add Section</div>
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
                      setname(product.name)
                      setmodel(product.model)
                      setdescription(product.description)
                      setSections(product.sections)
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
