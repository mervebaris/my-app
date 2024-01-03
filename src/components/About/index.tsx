import Image from 'next/image'
import React from 'react'
import CASPER from "@/components/assets/casper.png";

const About = () => {
  return (
    <div className=' w-full h-[500px] flex justify-around'>
      
      <div className="w-1/2  px-15 flex justify-center items-center">
        <Image
          src={CASPER}
          width={500}
          height={500}
          alt="Honor"
        />
      </div>
   
      <div className='w-1/2 px-32  flex flex-col gap-3 justify-center items-center text-xl font-semibold z-24 text-[#fff6fe] tracking-wide leading-10'>
        <div className='uppercase font-extrabold text-[#ff0066d1] text-2xl line-clamp-4 p-2'>About</div>
        GigglyToken is an innovative digital asset that combines humor and entertainment with the crypto world. Our project, inspired by cultures worldwide, aims to provide a delightful digital experience. GigglyToken, supported by blockchain technology, emphasizes reliability and transparency. With a community-centered approach, we offer users a unique opportunity to laugh and win.
      </div>
    </div>
  )
}

export default About