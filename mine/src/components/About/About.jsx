import React from 'react'

export const About = () => {
  return (
    <div className='flex w-[100%] h-96 items-center justify-center gap-20 '>
      <div>
        <div className='w-130 h-75   flex  flex-col gap-10'><h1  className='text-3xl '>About Us</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
        <button className='w-30 h-10 bg-blue-800 text-amber-100'>Read More</button>
        </div>
      </div>
      <div >
        <div className='w-2xl border-2 h-70 bg-blue-950 z-10 bg-blue-900'><img className='w-xl ml-11 mb-4 z-20 mb-3' src="https://themewagon.github.io/Carint/images/about-img.jpg" alt="" /></div><div>
      </div>
      </div>
    </div>
  )
}
export default About