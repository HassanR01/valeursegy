'use client'
import React, { createContext, useContext, useEffect, useState } from "react"



const DataContext = createContext()

export default function DataProvider({ children }) {
    const [blogs, setBlogs] = useState()
    const [impacts, setImpacts] = useState()
    const [news, setNews] = useState()
    const [products, setProducts] = useState()
    const [careers, setCareers] = useState()
    const [partenerShips, setPartenerShips] = useState()

    useEffect(() => {
        const GetData = async () => {
            const resBlogs = await fetch('/api/blogs')
            const resImpacts = await fetch('/api/impacts')
            const resNews = await fetch('/api/news')
            const resProducts = await fetch('/api/products')
            const resCareers = await fetch('/api/careers')
            const resPartenerShips = await fetch('/api/partnerships')

            const dataBlogs = await resBlogs.json()
            const dataImpacts = await resImpacts.json()
            const dataNews = await resNews.json()
            const dataProducts = await resProducts.json()
            const dataCareers = await resCareers.json()
            const dataPartenerShips = await resPartenerShips.json()
            console.log(dataBlogs);
            
            setBlogs(dataBlogs.blogs)
            setImpacts(dataImpacts.socialimpacts)
            setNews(dataNews.news)
            setProducts(dataProducts.products)
            setCareers(dataCareers.jobs)
            setPartenerShips(dataPartenerShips.partner)
        }

        GetData()
    }, [])

    return (
        <DataContext.Provider value={{ blogs, impacts, news, products, careers, partenerShips }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)