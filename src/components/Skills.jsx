import React from 'react'

export default function Skills() {
    const ski = {
        JavaScript: ['React', 'React Native', 'SvelteKit', 'Node.js'],
        Python: ['Data Analysis', 'Django', 'Visualization'],
        Web: ['Sass', 'TailwindCSS', 'Firebase', 'NoSQL', 'SQL', 'Heroku', 'Netlify' ,'AMS','GET', 'Docker','Kubernetes','GCP'],
        Desing: ['Canvas', 'Pixlr']
    }


  return (
    <div className='flex flex-col p-4 gap-4 shadow-xl bg-white rounded-md'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Info</h1>
            <div className='flex items-center gap-1 text-base relative after:absolute after:top-[95%] after:w-full after:h-[1px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>Email</h3>
                <a href="mailto:frankortizcarballo@gmail.com" className='text-cyan-500' target='_blank'>someEmail@gmail.com</a>
            </div>
            <div className='flex items-center gap-1 text-base relative after:absolute after:top-[95%] after:w-full after:h-[1px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>Github</h3>
                <a href="https://github.com/Frank3080" target='_blank' className='text-cyan-500'>Frank3080</a>
            </div>
            <div className='flex items-center gap-1 text-base relative after:absolute after:top-[95%] after:w-full after:h-[1px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/frank-ortiz-1180a0295/" target='_blank' className='text-cyan-500'>Frank Ortiz</a>
            </div>
            <div className='flex items-center gap-1 text-base relative after:absolute after:top-[95%] after:w-full after:h-[1px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>Random cats</h3>
                <a href="https://genrandom.com/cats/" target='_blank' className='text-cyan-500'>aaaaaaaaaaa</a>
            </div>
        </div>
        <div className='flex flex-col gap-1.5'>
            <h1 className='text-3xl'>Skills</h1>
            <div className='flex flex-col gap-3'>
            {Object.keys(ski).map((keyName, index) => {
                return (
                    <div key={index}>
                        <h3 className='text-lg'>{keyName}</h3>
                        <div className='flex items-center gap-2 flex-wrap'>
                            {ski[keyName].map((skill, i) => {
                                return (
                                    <div key={i} className='rounded-sm bg-gradient-to-r from-blue-700 to-violet-700 text-white px-2.5 py-1 hover:opacity-80 text-sm '>
                                        {skill}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        <div className='flex flex-col gap-2' >
            <h1 className='text-3xl'>Just for fun</h1>
            <div className='flex items-center flex-wrap text-lg p-7 gap-5'>
                <i class="fa-solid fa-basketball"></i>
                <i class="fa-solid fa-dog"></i>
                <i class="fa-solid fa-plane-departure"></i>
                <i class="fa-solid fa-leaf"></i>
                <i class="fa-solid fa-computer"></i>
                <i class="fa-solid fa-laptop-code"></i>
                <i class="fa-solid fa-volleyball"></i>
                <i class="fa-solid fa-chess-knight"></i>
                <i class="fa-solid fa-gamepad"></i>
            </div>
        </div>
    </div>
  )
}
