'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'

export default function DashboardDataGeting() {
    const [blogs, setBlogs] = useState(null)
    const [hcps, setHcps] = useState(null)
    const [meetings, setMeetings] = useState(null)
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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

                const Blogs = await resBlogs.json()
                setBlogs(Blogs.blogs)

                const Hcps = await resHcps.json()
                setHcps(Hcps.hcps)

                const Meetings = await resMeetings.json()
                setMeetings(Meetings.meetings)

                const Products = await resProducts.json()
                setProducts(Products.products)

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
            <div>DashboardDataGeting</div>
        )
    }
}
