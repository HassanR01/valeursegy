import Footer from '@/app/components/main/Footer'
import Header from '@/app/components/main/Header'
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

// Generate metadata
export async function generateMetadata({params}) {
    const { productName } = params
    const { product } = await GetProduct(productName)

    return {
        title: `Valeurs - ${product.name}`,
        description: `${product.description}`,
        openGraph: {
            title: `Valeurs - ${product.name}`,
            description: `${product.description}`,
            image: '/logoWhite.png',
            url: `https://valeursegy.vercel.app/wellness/${productName}`,
            type: 'website',
            locale: 'en_US',
            siteName: 'Valeurs'
        }
    }
}



export default async function Page({ params }) {
    const { productName } = params
    const { product } = await GetProduct(productName)
    
    return (
        <>
            <Header translate={`/ar/wellness/${productName}`} />
            <TitleSection image={product.image} title={`${product.name}`} description={product.description} />
            <section className='flex flex-col items-center justify-start w-full'>
                <ProductPage product={product} />
            </section>
            <Footer />
        </>
    )
}
