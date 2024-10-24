'use client'
import React, { useState } from 'react'
import bgFooter from '../../../public/FooterBg.jpg'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Footer() {
    let date = new Date()
    let year = date.getFullYear()

    const router = useRouter()
    const [email, setemail] = useState('')

    const SendContact = async () => {
        if (email) {
            confirm('We will send an email to let you updated and know more about Valeurs')
            try {
                const res = await fetch('/api/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })

                if (res.ok) {
                    setemail('')
                    router.push('/ar/contactus/thanks')
                }
            } catch (error) {
                console.log(error);

            }
        } else {
            alert('Add Your Email')
        }
    }


    return (
        <footer className='w-full p-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between relative min-h-[50vh]' style={{
            backgroundImage: `url(${bgFooter.src})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="companySlogan my-8 flex flex-col items-center lg:items-start justify-center z-10">
                <div className="image">
                    <Image src={'/logoWhite.png'} width={150} height={100} alt='Logo Valeurs' />
                </div>
                <div className="text flex lg:items-start flex-col text-center lg:text-start items-center justify-center">
                    <h1 className="my-2 text-4xl lg:text-2xl max-w-xs font-black text-center lg:text-start text-mainColor">Smart Solutions for <span className="text-priColor">Lifelong</span> Wellness.</h1>
                    <p className='max-w-sm text-xl text-mainColor'>Our products and services are designed to support a healthier future, ensuring that every individual experiences the best in medical care and wellness</p>
                </div>
            </div>
            <div className="quickLinks my-8 flex flex-col items-center lg:items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>Quick Links</h2>
                <ul className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/our-company'}>Our Company</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/news'}>Our News</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/blogs'}>Blogs</TransitionLink></li>
                </ul>
            </div>
            <div className="links flex my-8 flex-col items-center text-center lg:text-start lg:items-start justify-center z-10">
                <h2 className='text-xl font-bold text-mainColor mb-4'>Subscribe for our latest news and updates</h2>
                <div className="input lg:min-w-[450px]">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' value={email} onChange={(e) => setemail(e.target.value)} />
                    <div onClick={() => SendContact()} className=" w-[300px] text-whiteColor cursor-pointer mt-3 text-lg text-center font-medium p-2 rounded-tl-xl rounded-br-xl duration-700 hover:bg-green-400 bg-mainColor">Subscribe</div>
                </div>
                <div className="followUs w-full my-8 flex flex-row items-center justify-start">
                    <h4 className='text-mainColor text-xl font-medium'>Follow Us</h4>
                    <div className="links ml-4 flex justify-around items-center flex-row">
                        <Link className='mx-3' href={"https://www.facebook.com/valeurs.eg"} target='_blank'><Image src={'/facebookIcon.png'} width={30} height={30} alt='Facebook Icon' /></Link>
                        <Link className='mx-3' href={"https://www.youtube.com/@ValeursEgypt"} target='_blank'><Image src={'/youtube.png'} width={30} height={30} alt='Tiktok Icon' /></Link>
                        <Link className='mx-3' href={"https://www.instagram.com/valeurs.egypt"} target='_blank'><Image src={'/instagram.png'} width={30} height={30} alt='instagram Icon' /></Link>
                        <Link className='mx-3' href={"http://linkedin.com/company/valeursegypt"} target='_blank'><Image src={'/linkedin.png'} width={30} height={30} alt='linkedin Icon' /></Link>
                    </div>
                </div>
            </div>

            <div className="w-full absolute bottom-0 left-0 flex mt-4 text-center flex-wrap items-center justify-around bg-white z-10 p-2">
                <p>Copyright<sup>&copy;</sup>{year} <Link className='text-blue-600 font-semibold' href={'https://www.rockaidev.com'}>Rockai Dev</Link> | All Rights Reserved.</p>
                <p><Link className='font-bold mx-2' href="/">Terms {`&`} conditions</Link> <Link className='font-bold mx-2' href="/">Privacy Policy</Link></p>
            </div>



            {/* Handle Lights */}
            <div className="absolute inset-0 bg-whiteColor bg-opacity-95"></div>
        </footer>
    )
}
