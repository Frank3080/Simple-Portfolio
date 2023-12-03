import React from 'react'

export default function Experience() {
    const experiences = [
        {
            company: 'COMPANY 1',
            position: 'ASDAS',
            description: 'I promise i did something but i still cant remember'
        },
        {
            company: 'COMPANY 2',
            position: 'IDK',
            description: 'I promise i did something but i still cant remember'
        },
        {
            company: 'COMPANY 3',
            position: 'MANAGER',
            description: 'I promise i did something but i still cant remember'
        }
    ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {experiences.map((experience, index) => {
            return(
                <div key={index} className='flex flex-col'>
                    <h1 className='text-lg font-bold uppercase'>{experience.company}</h1>
                    <h2 className='text-small pb-2 font-semibold'>{experience.position}</h2>
                    <p className='text-slate-600'>{experience.description}</p>
                </div>
            )
      })}
    </div>
  )
}
