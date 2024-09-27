import Footer from '@/app/components/main/Footer'
import TitleSection from '@/app/components/main/TitleSection'
import ProductPage from '@/app/components/wellness/ProductPage'
import React from 'react'

const GetProduct = async (model) => {
    const apiUrl = process.env.API_URL
    
    try {
        const res = await fetch(`${apiUrl}/api/products/${model}`, {
            cache: "no-store"
        })

        if (res.ok) {
            return res.json()
        }
    } catch (error) {
        console.log(error);

    }
}



export default async function Page({ params }) {
    const { productName } = params
    const { product } = await GetProduct(productName)

    return (
        <>
            <TitleSection title={`${product.name}`} description={product.description} />
            <section className='flex flex-col items-center justify-start w-full'>
                <ProductPage product={product} />
            </section>
            <Footer />
        </>
    )
}
