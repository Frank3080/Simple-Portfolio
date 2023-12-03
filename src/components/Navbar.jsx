import React from 'react'

export default function Navbar() {
const links = [
    ['LinkedIn', 'https://www.linkedin.com/in/frank-ortiz-1180a0295/'],
    ['Github', 'https://github.com/Frank3080'],
]

  return (
    <div className='sticky-8 flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm'>
      <a className='text-sm sm:text-base' href='/'>FO</a>
      <div className='flex items-center gap-4'>
      {links.map((link, index) => {
        return (
            <a key={link[1]} href={link[1]} target="_blank">{link[0]}</a>
        )
      })}
      </div>
    </div>
  )
}
