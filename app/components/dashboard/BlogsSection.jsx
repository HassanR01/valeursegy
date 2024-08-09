'use client'
import { motion } from 'framer-motion'
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic'
import Image from 'next/image';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState } from 'react'

export default function BlogsSection({ blogs }) {
    const [addBlogForm, setAddBlogForm] = useState(false)
const [alert, setAlert] = useState('')



    // Handle Add Blogs
    const [title, settitle] = useState('')
    const [keywords, setkeywords] = useState('')
    const [image, setImage] = useState('')
    const [description, setdescription] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [text, setText] = useState('')
    const [sections, setSections] = useState([])
    const [writer, setwriter] = useState('')
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

    const HandleAddBlog = async (e) => {
        e.preventDefault()
        setAlert('Processing..')
        if (title && keywords && image && description && sections && writer ) {
            try {
                const res = await fetch('/api/blogs', {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json"
                    }, 
                    body: JSON.stringify({ title, keywords, image, description, sections, writer })
                })

                if (res.ok) {
                    settitle('')
                    setkeywords('')
                    setImage('')
                    setdescription('')
                    setSections([])
                    setwriter('')
                    setAlert('Add Successfully')
                } else {
                    setAlert('Technecal Issue')
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            setAlert('All Data Required')
        }

    }


    // Handle Edit Blog
    const [editForm, setEditForm] = useState(false)
    const [blogId, setBlogId] = useState('')

    const handleEditBlog = async (e) => {
        e.preventDefault()
        setAlert('Processing..')
        if (title && keywords && image && description && sections && writer) {
            try {
                const res = await fetch(`/api/blogs/${title}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ title, keywords, image, description, sections, writer })
                })

                if (res.ok) {
                    setAlert('Editted Successfully')
                    location.reload()
                } else {
                    setAlert('Technecal Issue')
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            setAlert('All Data Required')
        }
    }

    // Handle Delete Blog
    const DeleteBlog = async () => {
        if (confirm('You will Delete The Blog')) {
            try {
                const res = await fetch(`/api/blogs/${title}`, {
                    method: "DELETE"
                })

                if (res.ok) {
                    location.reload()
                }
            } catch (error) {
                console.log(error)
            }
        }
    }


    // title, keywords,image, description, sections, writer

    return (
        <>
            <div onClick={() => {
                setAddBlogForm(!addBlogForm)
                setEditForm(false)
                settitle('')
                setkeywords('')
                setImage('')
                setdescription('')
                setSections([])
                setwriter('')
            }} className={`ShowBtn fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${addBlogForm ? "text-green-500" : "text-mainColor"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg>
            </div>

            {addBlogForm ? (
                <>
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        onChange={() => setAlert('')}
                        onSubmit={editForm? handleEditBlog: HandleAddBlog}
                    >
                        <div className="fRow">
                            <div className="title">
                                <label htmlFor="title">Title of the Blog:</label>
                                <input type="text" name="title" id="title" placeholder='Attractive Title for SEO' value={title} onChange={(e) => settitle(e.target.value)} />
                            </div>
                            <div className="keywords">
                                <label htmlFor="keywords">Keywords: </label>
                                <input type="text" name="keywords" id="keywords" placeholder='Keywords for SEO' value={keywords} onChange={(e) => setkeywords(e.target.value)} />
                            </div>
                            <div className="writer">
                                <label htmlFor="writer">Author Name:</label>
                                <input type="text" name="writer" id="writer" placeholder='Name of The Author' value={writer} onChange={(e) => setwriter(e.target.value)} />
                            </div>
                            <div className="image">
                                <label htmlFor="image">Image of The Blog:</label>
                                <input type="text" name="iamge" id="image" placeholder='Link of Image From Cloudinary' value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                        </div>
                        <div className="fRow">
                            <div className="description w-full">
                            <label htmlFor="description">Description: </label>
                                <textarea name="description" id="description" placeholder='Description for SEO' value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
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
                                <input type="text" name="subtitle" id="subTitle" placeholder='SubTitle for Section in Blog' value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                            </div>
                            <JoditEditor ref={editor} value={text} onChange={e => setText(e)} />
                            <div className="btnForm cursor-pointer" onClick={() => updateSections()}>Add Section</div>
                        </div>
                        <h4 className='text-lg font-medium text-red-500 text-center'>{alert}</h4>
                        <button className="btnForm">{editForm ? "Edit Blog" : "Add Blog"}</button>
                    </motion.form>
                        {editForm && (<button onClick={() => DeleteBlog()} className="btnDelete">Delete Blog</button>)}
                </>
            ) : (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="BlogsList py-8 w-full flex flex-wrap items-center justify-center"
                        >
                            {blogs.map((blog, ind) => (
                                <div
                                    onClick={() => {
                                        setBlogId(blog._id)
                                        settitle(blog.title)
                                        setkeywords(blog.keywords)
                                        setImage(blog.image)
                                        setdescription(blog.description)
                                        setSections(blog.sections)
                                        setwriter(blog.writer)
                                        setEditForm(true)
                                        setAddBlogForm(true)
                                        
                                    }}
                                    className="blog overflow-hidden cursor-pointer m-4 bg-mainColor w-[300px] text-black flex flex-col items-start justify-start rounded-xl" key={ind}
                                >
                                    <Image src={blog.image} width={300} height={300} alt={`${blog.title}`} />
                                    <div className="text p-2 w-full">
                                    <h3 className='text-lg text-center font-medium'>{blog.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                </>
            )}
        </>
    )
}
