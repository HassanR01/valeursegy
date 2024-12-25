import React from 'react'
import BgOCompany from '../../public/bgOurCompany.jpg'
import BgHome from '../../public/bgHome.jpg'
import Image from 'next/image';
import Footer from '../components/main/Footer';
import AnimatedNumber from '../components/main/AnimateNumber';
import dynamic from 'next/dynamic';
import Header from '../components/main/Header';
const BranchesMap = dynamic(() => import('../components/map/BranchesMap'), {
  ssr: false
})


export const metadata = {
  title: "Valeurs - Our Company",
  description: "At Valeurs, we are committed to revolutionizing healthcare in the Middle East and beyond by integrating cutting-edge medical AI and wellness solutions",
  openGraph: {
    title: "Valeurs - Our Company",
    description: "At Valeurs, we are committed to revolutionizing healthcare in the Middle East and beyond by integrating cutting-edge medical AI and wellness solutions",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/our-company',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};


export default function Page() {
  return (
    <>
      <Header translate={'/ar/our-company'} />
      <section id='ouroverview' className="section w-[95%] rounded-tr-xl rounded-bl-xl lg:h-[85vh] h-[120vh] my-[100px] relative px-4 flex flex-col items-center justify-center overflow-hidden" style={{
        backgroundImage: `url(${BgHome.src})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: "start",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="front flex flex-col items-center justify-center w-full z-10">
          <Image src={'/logoWhite.png'} width={250} height={250} alt='Valuers Logo' />
          <h1 className="my-10 text-center px-4 text-4xl lg:text-6xl font-bold z-[5] text-mainColor">Smart Solutions for <span className="text-priColor">Lifelong</span> Wellness.</h1>

          <div className="counter flex items-center justify-around flex-wrap w-full">
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={30} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">Partnerships</h3>
            </div>
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={250000} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">Cured Patient</h3>
            </div>
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={120} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">Social Activity</h3>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-whiteColor bg-opacity-90 filter"></div>
      </section>

      <section id='text' className="section text-center w-full relative p-4 max-w-5xl flex flex-col items-center justify-center my-[80px]">
        <h2 className='text-3xl lg:text-5xl mb-10 font-bold'>Our Mission</h2>
        <h2 className='text-xl lg:text-3xl font-semibold mb-4'>At Valeurs, we are committed to revolutionizing healthcare in the Middle East and beyond by integrating cutting-edge medical AI and wellness solutions</h2>
        {/* <p className='text-xl font-semibold lg:text-2xl mb-4'>Leveraging cutting-edge AI technologies</p> */}
        <p className='text-xl max-w-6xl'>Through our advanced technologies, including autologous treatment protocols, stem cell applications, and pharmaceutical compounding, we aim to empower healthcare providers and improve patient outcomes. Guided by innovation, excellence, and compassion, we strive to make world-class healthcare accessible and transformative.</p>
      </section>

      <section
        className="w-full h-[40vh] relative my-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgOCompany.src})`,
          backgroundAttachment: 'fixed',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 filter blur-sm"></div>
        <h2 className='lg:text-6xl text-3xl w-full text-whiteColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-black mb-6 px-2'>Become Our Wellness ambassador</h2>

      </section>

      <section id='text' className="section text-center w-full relative p-4 max-w-5xl flex flex-col items-center justify-center my-[80px]">
        <h2 className='text-3xl lg:text-5xl mb-10 font-bold'>Our Vision</h2>
        <p className='text-xl font-semibold lg:text-3xl mb-4'>To be the leading global provider of medical AI and wellness solutions, setting new benchmarks for healthcare innovation and accessibility.</p>
        <p className='text-xl max-w-6xl'>By leveraging the latest technologies and fostering partnerships across Egypt, the UAE, Jordan, Greece, and the USA, we aspire to redefine the future of health and wellness in the Middle East and create a lasting impact on global healthcare standards.</p>
      </section>
      

      <h2 className='text-3xl lg:text-5xl my-10 font-bold'>Our Presence</h2>
      <section id='ouroverview' className="section w-[95%] rounded-tr-xl rounded-bl-xl h-[50vh] mb-[80px] relative flex flex-col items-center justify-center overflow-hidden" style={{
        backgroundImage: `url(${BgHome.src})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: "start",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <BranchesMap />
        <div className="absolute inset-0 bg-whiteColor bg-opacity-90 filter"></div>
      </section>

      {/* <section id='meetourteam' className="section my-[80px] p-4 text-center flex flex-col items-center justify-center">
        <h1 className='text-center text-4xl font-bold mb-4'>Meet Our Team</h1>
        <p className='text-lg font-medium max-w-6xl'>Behind every innovative solution at Valeurs is a team of passionate professionals committed to excellence. Our diverse team brings together expertise in healthcare, technology, and wellness to create impactful solutions for a healthier future.</p>
        <div className="TeamList flex flex-wrap items-center justify-center my-5 p-4">

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>Dr. Mohamoud Essawy</h4>
              <h6 className='text-xl'>CEO</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>Mr. Ahmed Atta</h4>
              <h6 className='text-xl'>CFO</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>Dr. Muhammed Essam</h4>
              <h6 className='text-xl'>Marketing Manager</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>Dr. Assem El-Damanhory</h4>
              <h6 className='text-xl'>Sales Manager</h6>
            </div>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </>
  )
}
