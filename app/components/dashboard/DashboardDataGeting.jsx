'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'
import Image from 'next/image'
import Link from 'next/link'
import AnalysisSection from './AnalysisSection'
import ProductsSection from './ProductsSection'
import BlogsSection from './BlogsSection'
import MeetingSection from './MeetingSection'
import HcpsSection from './HcpsSection'
import UsersSection from './UsersSection'
import SocialImpactSection from './SocialImpactSection'
import NewsSction from './NewsSction'
import CareersSection from './CareersSection'
import PartnershipsSection from './PartnershipsSection'


export default function DashboardDataGeting() {
    const [blogs, setBlogs] = useState(null)
    const [jobs, setJobs] = useState(null)
    const [contacts, setContacts] = useState(null)
    const [hcps, setHcps] = useState(null)
    const [meetings, setMeetings] = useState(null)
    const [news, setNews] = useState(null)
    const [partnerships, setPartnerships] = useState(null)
    const [products, setProducts] = useState(null)
    const [socialImpacts, setSocialImpacts] = useState(null)
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [section, setSection] = useState('Products')

    useEffect(() => {
        const GetData = async () => {
            try {
                const resBlogs = await fetch('/api/blogs', {
                    cache: 'no-store'
                })

                const resHcps = await fetch('/api/hcps', {
                    cache: 'no-store'
                })

                const resMeetings = await fetch('/api/meetings', {
                    cache: 'no-store'
                })

                const resProducts = await fetch('/api/products', {
                    cache: 'no-store'
                })

                const resUsers = await fetch('/api/users', {
                    cache: 'no-store'
                })

                const resjobs = await fetch('/api/careers' , {
                    cache: 'no-store'
                })

                const rescontacts = await fetch('/api/contacts' , {
                    cache: 'no-store'
                })

                const resnews = await fetch('/api/news' , {
                    cache: 'no-store'
                })

                const respartnerships = await fetch('/api/partnerships' , {
                    cache: 'no-store'
                })

                const ressocialImpacts = await fetch('/api/social-impacts' , {
                    cache: 'no-store'
                })

                const jobs = await resjobs.json()
                setJobs(jobs.jobs)                      

                const contacts = await rescontacts.json()
                setContacts(contacts.contacts)           

                const news = await resnews.json()
                setNews(news.news)       

                const partnerships = await respartnerships.json()
                setPartnerships(partnerships.partner)           

                const socialImpacts = await ressocialImpacts.json()
                setSocialImpacts(socialImpacts.socialimpacts)    

                const Blogs = await resBlogs.json()
                setBlogs(Blogs.blogs)

                const Hcps = await resHcps.json()
                setHcps(Hcps.hcps)

                const Meetings = await resMeetings.json()
                setMeetings(Meetings.meetings)

                const Products = await resProducts.json()
                setProducts(Products.products)

                const Users = await resUsers.json()
                setUsers(Users.users)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        GetData()
    }, [])

    if (isLoading) {
        return <Loading />
    } else {


        return (
            <>
                <div className="menu flex items-center justify-between flex-col bg-whiteColor p-4 w-[170px] h-screen rounded-r-xl">
                    <div className="logo">
                        <a href={'/'} >
                            <Image src={'/logoWhite.png'} width={120} height={120} alt='logo' />
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Analysis')}>Analysis</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Products')}>Products</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Blogs')}>Blogs</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('News')}>News</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Social-Impact')}>Social Impact</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Partnerships')}>Partnerships</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Meetings')}>Meetings</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('HCPs')}>HCPs</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Careers')}>Careers</li>
                            <li className='w-32 my-2 cursor-pointer text-whiteColor rounded-xl text-center p-2 bg-mainColor font-bold' onClick={() => setSection('Users')}>Users</li>
                        </ul>
                    </nav>
                    <div className="logout">

                    </div>
                </div>

                {section === "Analysis" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Analysis</h3>
                            <AnalysisSection blogs={blogs} hcps={hcps} meetings={meetings} products={products} />
                        </section>
                    </>
                )}
                {section === "Products" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Products</h3>
                            <ProductsSection products={products} />
                        </section>
                    </>
                )}
                {section === "Blogs" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Blogs</h3>
                            <BlogsSection blogs={blogs} />
                        </section>
                    </>
                )}
                {section === "News" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>News</h3>
                            <NewsSction />
                        </section>
                    </>
                )}
                {section === "Social-Impact" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Social Impact</h3>
                            <SocialImpactSection />
                        </section>
                    </>
                )}
                {section === "Partnerships" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Partnerships</h3>
                            <PartnershipsSection />
                        </section>
                    </>
                )}
                {section === "Meetings" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Meetings</h3>
                            <MeetingSection meetings={meetings} />
                        </section>
                    </>
                )}
                {section === "HCPs" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>HCPs</h3>
                            <HcpsSection hcps={hcps} />
                        </section>
                    </>
                )}
                {section === "Careers" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Careers</h3>
                            <CareersSection />
                        </section>
                    </>
                )}
                {section === "Users" && (
                    <>
                        <section className='w-[90%] h-screen overflow-y-auto flex flex-col items-center justify-start p-8'>
                            <h3 className='text-whiteColor font-bold mb-8 text-2xl'>Users</h3>
                            <UsersSection users={users} />
                        </section>
                    </>
                )}

            </>
        )
    }
}
