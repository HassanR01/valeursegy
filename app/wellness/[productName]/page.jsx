import Footer from '@/app/components/main/Footer'
import ProductPage from '@/app/components/wellness/productPage'
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
            <section className='flex flex-col items-center justify-start w-full'>
                <ProductPage product={product} />
            </section>
            <Footer />
        </>
    )
}
