import React from 'react'
import BgOCompany from '../../../public/bgOurCompany.jpg'
import BgHome from '../../../public/bgHome.jpg'
import Image from 'next/image';
import AnimatedNumber from '../../components/main/AnimateNumber';
import dynamic from 'next/dynamic';
import HeaderAr from '@/app/components/main/HeaderAr';
import FooterAr from '@/app/components/main/FooterAr';
const BranchesMap = dynamic(() => import('../../components/map/BranchesMap'), {
  ssr: false
})


export const metadata = {
  title: "عن ڤالورز",
  description: "نحن في شركة فالورز مهتمون بتزويد المجتمع بأحدث الأجهزة الطبية التي تشمل العمل بالذكاء الإصطناعي و التي يمكنها خدمة الصحة العامة للمجتمع ، حيث نكون سفراء لمجال الصحة العامة في الشرق الأوسط",
  openGraph: {
    title: "عن ڤالورز",
    description: "نحن في شركة فالورز مهتمون بتزويد المجتمع بأحدث الأجهزة الطبية التي تشمل العمل بالذكاء الإصطناعي و التي يمكنها خدمة الصحة العامة للمجتمع ، حيث نكون سفراء لمجال الصحة العامة في الشرق الأوسط",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/our-company',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'فالورز'
  }
};


export default function Page() {
  return (
    <>
      <HeaderAr translate={'/our-company'} />
      <section dir='rtl' id='ouroverview' className="section w-[95%] rounded-tr-xl rounded-bl-xl lg:h-[85vh] h-[120vh] my-[100px] relative px-4 flex flex-col items-center justify-center overflow-hidden" style={{
        backgroundImage: `url(${BgHome.src})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: "start",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="front flex flex-col items-center justify-center w-full z-10">
          <Image src={'/logoWhite.png'} width={250} height={250} alt='Valuers Logo' />
          <h1 className="my-10 text-center px-4 text-4xl lg:text-6xl font-bold z-[5] text-mainColor">حلول ذكية <span className="text-priColor">للصحة العامة</span> مدى الحياة.</h1>

          <div className="counter flex items-center justify-around flex-wrap w-full">
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={30} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">شركاء النجاح</h3>
            </div>
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={250000} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">مريض مستفيد</h3>
            </div>
            <div className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl flex flex-row items-center justify-center text-mainColor font-bold">+<AnimatedNumber number={120} /></h2>
              <h3 className="text-3xl font-medium text-mainColor">حدث اجتماعي</h3>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-whiteColor bg-opacity-90 filter"></div>
      </section>

      <section id='text' className="section text-center w-full relative p-4 max-w-5xl flex flex-col items-center justify-center my-[80px]">
        <h2 className='text-3xl lg:text-5xl mb-10 font-bold'>مهمتنا</h2>
        <h4 className='text-xl lg:text-3xl font-semibold mb-4'>في ڤالورز، نحن ملتزمون بإحداث ثورة في مجال الرعاية الصحية في الشرق الأوسط والعالم من خلال دمج أحدث تقنيات الذكاء الاصطناعي الطبي وحلول الرعاية الصحية المتقدمة.</h4>
        <p className='text-xl max-w-6xl'>من خلال تقنياتنا المتقدمة، بما في ذلك بروتوكولات العلاج الذاتي وتطبيقات الخلايا الجذعية وتحضير الأدوية المركبة، نسعى لتمكين مقدمي الرعاية الصحية وتحسين نتائج المرضى. مسترشدين بالابتكار والتميز والتعاطف، حيث نعمل على جعل الرعاية الصحية ذات المستوى العالمي متاحة وتحمل تأثيرًا فعالاً.</p>
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
        <h2 className='lg:text-6xl font-mainFont text-3xl w-full text-whiteColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-black mb-6 px-2'>كن سفيراً للرعاية الصحية</h2>

      </section>

      <section id='vision' className="section text-center w-full relative p-4 max-w-5xl flex flex-col items-center justify-center my-[80px]">
        <h2 className='text-3xl lg:text-5xl mb-10 font-bold'>رؤيتنا</h2>
        <h4 className='text-xl lg:text-3xl font-semibold mb-4'>أن نكون المزود العالمي الرائد لحلول الذكاء الاصطناعي الطبي و الرعاية الصحية، واضعين معايير جديدة للابتكار وسهولة الاسفادة.</h4>
        <p className='text-xl max-w-6xl'>من أحدث التقنيات وتعزيز الشراكات في مصر، الإمارات، الأردن، اليونان، والولايات المتحدة الأمريكية، حيث نسعى إلى إعادة تعريف مستقبل الصحة والعافية في الشرق الأوسط وترك بصمة مستدامة على معايير الرعاية الصحية العالمية.</p>
      </section>
      

      <h2 className='text-3xl lg:text-5xl my-10 font-bold'>تواجدنا عالمياً</h2>
      <section id='Branches' className="section w-[95%] rounded-tr-xl rounded-bl-xl h-[50vh] mb-[80px] relative flex flex-col items-center justify-center overflow-hidden" style={{
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
        <h1 className='text-center text-4xl font-bold mb-4'>تعرف علي فريقنا</h1>
        <p className='text-lg font-medium max-w-6xl'>وراء كل حل مبتكر  لدينا فريق من الخبراء المهنيين الشغوفين بها المجال، فريقنا يجمع بين الخبرة و التميز في مجالات الرعاية الصحية والتكنولوجيا وتقديم حلول مؤثرة من أجل مستقبل أكثر صحة.</p>
        <div dir='rtl' className="TeamList flex flex-wrap items-center justify-center my-5 p-4">

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>د/ محمود عيسوي</h4>
              <h6 className='text-xl'>الرئيس التنفيذي</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>أ/ احمد عطا</h4>
              <h6 className='text-xl'>المدير المالي</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>د/ محمد عصام</h4>
              <h6 className='text-xl'>المدير التسويقي</h6>
            </div>
          </div>

          <div className="person1 relative w-[300px] h-[230px] flex flex-col items-center justify-end m-2">
            <div className="image w-[250] h-[250] rounded-tr-xl rounded-bl-xl absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden ">
              <Image className='hover:scale-110 duration-700' src={'/person1.png'} width={300} height={300} alt='person Name' />
            </div>
            <div className="details hover:shadow-lg duration-700 border-2 border-whiteColor pt-20 p-2 rounded-tr-xl rounded-bl-xl flex flex-col items-center justify-center w-full">
              <h4 className='text-xl font-bold text-center'>د/ عاصم الدمنهوري</h4>
              <h6 className='text-xl'>مدير المبيعات</h6>
            </div>
          </div>
        </div>
      </section> */}
      <FooterAr />
    </>
  )
}
