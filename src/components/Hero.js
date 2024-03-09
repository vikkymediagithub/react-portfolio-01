// import React from 'react'
// import profile from '../assets/img/profile.png'
// import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
// import { TypeAnimation } from 'react-type-animation';



// const Hero = () => {
//   return (
//     <div>
//         <div className=' max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center'>
//             <div className='flex-col my-auto mx-auto md:mx-0'>
//                 <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi, I am victor Joseph</p>
//                 <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
//                 <TypeAnimation
//                 sequence={[
//                     "Frontend Developer",
//                     1000,
//                     "Web Designer",
//                     1000,
//                     "Graphics Designer",
//                     1000,
//                     "Consultant",
//                     1000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 />
//                 </h1>
//                 <div className='flex justify-center items-center'>
//                     <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with a 4+ years experience</p>
//                 </div>
//                 <div className='text-5xl flex justify-start gap-16 my-16 text-purple-600'>
//                     <AiFillGithub />
//                     <AiFillInstagram />
//                     <AiFillLinkedin />
//                 </div>
//                 <div className='relative inline-flex group my-3'>
//                     <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 gorup-hover:duration-500 animate-tilt'></div>
//                     <a href='/' title='Download CV' role='button' className='w-[190px] h-[60] relative inline-flex items-center justify-center px-8 py-4 text-lg font-font text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
//                 </div>
//             </div>
//             <div className='my-auto'>
//             <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profile} alt='profile pics'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import profile from '../assets/img/profile.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <div className='max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center'>
        <div className='flex-col my-auto mx-auto md:mx-0 text-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi, I am Victor Joseph</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Web Designer",
                1000,
                "Graphics Designer",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with a 4+ years experience</p>
          </div>
          <div className='text-5xl flex justify-center gap-6 my-6 text-purple-600'>
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className='relative inline-flex group my-3'>
            <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-500 animate-tilt'></div>
            <a href='/' title='Download CV' role='button' className='w-[190px] h-[60] relative inline-flex items-center justify-center px-8 py-4 text-lg font-font text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
          </div>
        </div>
        <div className='my-auto'>
          <img className='w-full max-w-[500px] mx-auto h-auto' src={profile} alt='profile pics' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
