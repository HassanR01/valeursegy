'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnersList({ lang }) {
    const [isLoading, setIsLoading] = useState(true)
    const [partners, setPartners] = useState(null)

    useEffect(() => {
        const GetPartner = async () => {
            try {
                const res = await fetch('/api/partnerships', {
                    cache: 'no-store'
                })

                const partners = await res.json()
                setPartners(partners.partner)

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        GetPartner()

    }, [])


    if (!isLoading) {

        const filterPartner = (type) => {
            const wantedpartners = partners.filter(partner => {
                const matchedtype = partner.type === type

                return matchedtype
            })

            return wantedpartners
        }

        return (
            <>
                <h2 className='text-4xl mb-8 font-bold text-center text-whiteColor'>{lang === 'ar' ? "شركات" : "Companies"}</h2>
                <div className="partnersList flex flex-wrap items-center justify-around">
                    {filterPartner('Company').map((partner, ind) => (
                        <motion.div
                            initial={{opacity: 0 , y:20}}
                            whileInView={{opacity: 1, y:0}}
                            transition={{duration: 0.5 , delay: 0.2 * ind}}
                            key={ind} className="partner w-[300px] m-4 p-4 rounded-xl hover:shadow-xl duration-500 flex items-center justify-center flex-col border"
                        >
                            <Image src={partner.logo} width={50} height={50} alt={partner.name} />
                            <h3 className='text-2xl font-semibold mt-4'>{lang === 'ar' ? partner.nameAr : partner.name}</h3>
                            <p className='text-center'>{lang === 'ar' ? partner.descriptionAr : partner.description}</p>
                            <div className="link w-full flex items-center justify-center">
                                <Link href={partner.link} className="btnForm" target='_blank'>{lang === 'ar' ? 'لمعرفة المزيد' :"Learn More"}</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <h2 className='text-4xl my-8 font-bold text-center text-whiteColor'>{lang === 'ar' ? "عيادات" : "Clinics"}</h2>
                <div className="partnersList flex flex-wrap items-center justify-around">
                    {filterPartner('Clinic').map((partner, ind) => (
                        <motion.div
                            initial={{opacity: 0 , y:20}}
                            whileInView={{opacity: 1, y:0}}
                            transition={{duration: 0.5 , delay: 0.2 * ind}}
                            key={ind} className="partner w-[300px] m-4 p-4 rounded-xl hover:shadow-xl duration-500 flex items-center justify-center flex-col border"
                        >
                            <Image src={partner.logo} width={50} height={50} alt={partner.name} />
                            <h3 className='text-2xl font-semibold mt-4'>{lang === 'ar' ? partner.nameAr : partner.name}</h3>
                            <p className='text-center'>{lang === 'ar' ? partner.descriptionAr : partner.description}</p>
                            <div className="link w-full flex items-center justify-center">
                                <Link href={partner.link} className="btnForm" target='_blank'>{lang === 'ar' ? 'لمعرفة المزيد' :"Learn More"}</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
}
