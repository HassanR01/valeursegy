import React from 'react'

export default function Page({ params }) {
    const { productName } = params
    console.log(productName)

    return (
        <div className='p-5 font-bold text-3xl text-white'>{productName.replaceAll('.', ' ')}</div>
    )
}
