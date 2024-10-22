'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import TransitionLink from '../main/TransitionLink'

export default function HandleContactSend() {
    const [alert, setAlert] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const router = useRouter()

    // Send Contact Request
    const SendContact = async (e) => {
        e.preventDefault()
        setAlert('Processing..')
        if (name && phone && email && message) {

            try {
                const res = await fetch('/api/contacts', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ name, phone, email, message })
                })

                if (res.ok) {
                    setAlert('Thanks for contact Us')
                    router.push('/contactus/thanks')
                } else {
                    setAlert('Technecal Error')
                }

            } catch (error) {
                console.log(error);
            }
        } else {
            setAlert('All Data Required')
        }
    }

    return (
        <>
            <div className="contactcontainer w-full flex flex-wrap items-start justify-around">
                <form className='flex mx-4 w-1/2 lg:min-w-[550px] flex-col items-start justify-center' onSubmit={SendContact} onChange={() => setAlert('')}>
                    <div className="fRow w-full">
                        <div className="name w-full flex flex-col items-start justify-center my-2">
                            <label className='text-xl font-semibold text-whiteColor mb-1' htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="phone w-full flex flex-col items-start justify-center my-2">
                            <label className='text-xl font-semibold text-whiteColor mb-1' htmlFor="phone">Mobile:</label>
                            <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
                        </div>
                    </div>
                    <div className="sRow w-full">
                        <div className="email w-full flex flex-col items-start justify-center my-2">
                            <label className='text-xl font-semibold text-whiteColor mb-1' htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                    </div>
                    <div className="3Row w-full">
                        <div className="message w-full flex flex-col items-start justify-center my-2">
                            <label className='text-xl font-semibold text-whiteColor mb-1' htmlFor="message">Message:</label>
                            <textarea name="message" id="message" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <span>{ alert }</span>
                    <button className="btnForm">Send Your Message</button>
                </form>
                <div className="contactInfo flex flex-col items-start justify-center mt-4 lg:mx-10">
                    <h2 className='text-2xl mb-4 font-bold text-whiteColor'>Contact Info</h2>
                    <div className="info mb-4">
                        <h4 className='text-lg font-medium'>Mobil: <span className='font-light'>01234567890</span></h4>
                        <h4 className='text-lg font-medium'>Email: <span className='font-light'>info@valeursegy.com</span></h4>
                        <h4 className='text-lg font-medium'>Locations:</h4>
                        <p className='ml-4'><span className='text-lg font-semibold'>Egypt:</span> Cairo - Fifth Settlement</p>
                        <p className='ml-4'><span className='text-lg font-semibold'>France:</span> Paris</p>
                        <p className='ml-4'><span className='text-lg font-semibold'>UAE:</span> Dubai</p>
                        <p className='ml-4'><span className='text-lg font-semibold'>USA:</span> New York</p>
                    </div>
                    <h2 className='text-2xl mb-4 font-bold text-whiteColor'>Social Media</h2>
                    <div className="links mb-4 w-full flex justify-around items-center flex-row">
                        <Link className='m-1' href={"https://www.facebook.com/valeurs.eg"} target='_blank'><Image src={'/facebookIcon.png'} width={30} height={30} alt='Facebook Icon' /></Link>
                        <Link className='m-1' href={"https://www.youtube.com/@ValeursEgypt"} target='_blank'><Image src={'/youtube.png'} width={30} height={30} alt='Tiktok Icon' /></Link>
                        <Link className='m-1' href={"https://www.instagram.com/valeurs.egypt"} target='_blank'><Image src={'/instagram.png'} width={30} height={30} alt='instagram Icon' /></Link>
                        <Link className='m-1' href={"http://linkedin.com/company/valeursegypt"} target='_blank'><Image src={'/linkedin.png'} width={30} height={30} alt='linkedin Icon' /></Link>
                    </div>
                    <TransitionLink href={'/'}>
                        <Image src={'/logo.png'} width={250} height={120} alt='Logo Valeurs' />
                    </TransitionLink>
                </div>
            </div>
        </>
    )
}
