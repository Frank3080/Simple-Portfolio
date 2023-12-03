import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
    const { onClose } = props
    const projects = [
        {name: 'asdfasdf', link:'asdfasdf', desc:'asdfas', github: 'asdfasd'}, {name: 'asfghsfgdh', link:'dfghdfgh', desc:'dfghdfgh', github: 'dfghdfgj'}, {name: 'dfgjdfgj', link:'dfgjdfg', desc:'dfgjdfg', github: 'dfgjdfghd'}
    ]


    return ReactDOM.createPortal(
        <div className='absolute top-0 left-0 w-screen h-screen overflow-scroll text-white md:h-[80%] shadow bg-slate-900 z-50 flex flex-col gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]'>
            <div className='flex text-xl p-4 justify-between items-center'>
                <h2>Projects</h2>
                <i onClick={onClose} className="fa-solid cursor-pointer fa-xmark text-white hover:rotate-[45deg]"></i>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 bg-white  md:p-1'>
                {projects.map((project, index) => {
                    return(
                        <div key={index} className='w-full md:h-[200px] aspect-video bg-slate-900 text-white flex flex-col p-2 gap-2'>
                            <h1>{project.name}</h1>
                            <p className='text-xs flex-1'>{project.description}</p>
                            <div className='grid grid-cols-2 text-center '>
                                <a>
                                    Live
                                </a>
                                <a>
                                    Github
                                </a>
                            </div>
                        </div>
                    )    
                })}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
