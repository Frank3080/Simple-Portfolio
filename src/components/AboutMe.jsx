import React from 'react'

export default function AboutMe(props) {
    const { openModal } = props

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 '>
        <div className='flex flex-col gap-3'>
            <div className=' flex items-center'>
                <h1 className='font-bold text-4xl sm:text-6xl'>Frank Ortiz</h1>
                <img className='mx-auto h-[200px] aspect-square rounded-full shadow-lg md:hidden'src='https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/614.png' alt='shaq'></img>
            </div>
            <h2 className='font-medium text-slate-800 text-lg sm:text-2xl'>Web developer | Math Student</h2>
            <p className='text-slate-500'>I absolutely love to create fun and interesting sites using the latest and greatest technology.</p>
        <div className='my-10 flex items-center gap-4 text-s sm:text-base'>
            <button onClick={openModal} className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 text-white px-5 py-2.5 hover:opacity-80'>Projects</button>
            <a href='mailto:frankortizcarballo@gmail.com' className='rounded-full text-purple-800 border border-solid border-violet-800 px-3.5 py-2 hover:opacity-80'>Contacts</a>
        </div>
        </div>
        <img className='mx-auto h-[200px] aspect-square rounded-full shadow-lg hidden md:flex'src='https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/614.png' alt='shaq'></img>
    </div>
  )
}
