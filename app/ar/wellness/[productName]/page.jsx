import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
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

export async function generateMetadata({ params }) {
    const { productName } = params
    const { product } = await GetProduct(productName)

    // Data Arabic
    return {
        title: `ڤالورز - ${product.nameAr}`,
        description: `${product.descriptionAr}`,
        openGraph: {
            title: `ڤالورز - ${product.nameAr}`,
            description: `${product.descriptionAr}`,
            image: '/logoWhite.png',
            url: `https://valeursegy.vercel.app/ar/wellness/${productName}`,
            type: 'website',
            locale: 'ar_AR',
            siteName: 'ڤالورز'
        }
    }
}



export default async function Page({ params }) {
    const { productName } = params
    const { product } = await GetProduct(productName)

    return (
        <>
            <HeaderAr translate={`/wellness/${productName}`} />
            <TitleSection image title={`${product.nameAr}`} description={product.descriptionAr} />
            <section className='flex flex-col items-center justify-start w-full'>
                <ProductPage product={product} lang={'ar'} />
            </section>
            <FooterAr />
        </>
    )
}
