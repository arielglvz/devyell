import { works } from '../data'
import { Icon } from '@iconify/react';

const Works = () => {
  return (
    <div className='w-full h-full bg-white p-[2rem_1.5rem] rounded-lg'>
      <div className="flex gap-[20px] flex-row flex-wrap">
        { works.map((project) => (
          <div className="relative flex-grow group overflow-hidden cursor-p" key={project.id}>
            <img className="h-full w-full transition-transform duration-300 group-hover:scale-110" src={project.img} alt={project.title} />
            <div className="absolute top-0 left-0 w-full h-full flex-col justify-center bg-gradient-to-t from-[rgba(34,35,37,0.6)] via-[rgba(34,35,37,0)] to-[rgba(34,35,37,0.6)] transition-all duration-200 hidden group-hover:flex">
              <h5 className='py-[10px] px-[8px] text-md flex flex-1 text-white transition-all duration-200 ease-in-out opacity-[0] group-hover:opacity-[1]'>{project.title}</h5>
              <div className="py-[10px] px-[8px] flex justify-start gap-4">
                <div className="w-max px-3 py-2 rounded-md bg-grey-900 hover:border hover:border-blue-400 cursor-pointer group">
                  <Icon icon="mdi:github-box" className='h-6 w-6 opacity-[.7] fill-current text-gray-900 group-hover:text-white' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works
