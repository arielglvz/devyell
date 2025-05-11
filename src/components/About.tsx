import { Icon } from '@iconify/react';
import SectionTitle from './ui/SectionTitle'
import { about } from '../data';
import BentoTitle from './ui/BentoTitle';
import CallToAction from './ui/CallToAction';

const About = () => {

  return (
    <div className='w-full h-full bg-white p-[2rem_2.5rem] rounded-lg animate-fade-enter'>
      <div className="min-h-[12.5rem]">
        <div className="mb-2 relative w-full rounded-[12px]">
          <div className="relative w-full h-64 bento-card rounded-[12px] cover-img shadow">
            <div className="absolute bottom-[-20%] left-[50%] md:left-[3%] translate-x-[-50%] md:translate-x-[unset] border-4 border-white rounded-[100%] h-[100px] w-[100px] profile-img" />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-0 md:gap-4">
            <div className="w-full md:w-[150px] h-[50px]"></div>
            <div className="w-full flex justify-center md:justify-start flex-row gap-0 p-2">
              <div className="flex flex-col items-center md:items-start gap-0 ">
                <p className="text-lg font-semibold text-accent transition-colors flex flex-row items-center gap-0.5">
                  Ariel Galvez
                  <Icon icon="material-symbols:verified" className='"h-5 w-5 opacity-[.7] fill-current text-blue-500' />
                </p>
                <p className="text-xs text-foreground/70 text-accent/70">Frontend Developer</p>
              </div>
              {/* <div className="w-full flex">Contact</div> */}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <SectionTitle title="About" subtitle={about["intro"]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-1 md:grid-rows-4 gap-4">
          <div className="p-[1rem] col-span-1 md:col-span-2 row-span-1 md:row-span-4 border border-grey-200 bg-grey-100 shadow rounded-[1rem] animate-fade-in-5">
            <div className="mb-[.5rem]">
              <BentoTitle  icon="akar-icons:laptop-device" title="Tech Stack" />
            </div>
            <div className='flex flex-col'>
              {Object.entries(about["techstack"]).map(([category, items]) => (
                <div key={category} className='mb-5'>
                  <div className="mb-2 text-sm font-bold capitalize">{category}</div>
                  <ul className="flex gap-2 flex-wrap">
                    {items.map((item, index) => (
                      <li 
                        key={index} 
                        className="px-2 py-0.5 flex self-center text-xs rounded-md bg-foreground/5 border border-foreground/10 text-gray-700 list-none whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
            <div className="mb-[.5rem]">
              <BentoTitle  icon="mdi:account-school" title="Education" />
            </div>
              <h5 className="text-sm font-semibold text-accent transition-colors">BS Computer Science</h5>
              <div className="flex flex-row gap-5 justify-between items-center">
                <div className="text-xs text-foreground/70 text-accent/70">University of Perpetual Help System Dalta</div>
                <div className="h-max px-2 py-0.5 flex items-center justify-center text-xs rounded-md bg-foreground/5 border border-foreground/10 text-[10px] text-gray-700 list-none whitespace-nowrap font-bold">2019</div>
              </div>
            </div>
          </div>
          <div className="p-[1rem] col-span-1 md:col-span-4 row-span-1 md:row-span-3 border border-grey-100 bg-grey-100 shadow flex flex-col gap-[1rem] rounded-[1rem] animate-fade-in-6">
            <div className="mb-[.5rem]">
              <BentoTitle  icon="mdi:briefcase" title="Experiences" />
            </div>
            <div className='h-full py-2'>
              {about["experiences"].map((exp) => (
                <div key={exp.id} className="mb-[1.6rem]">
                  <h5 className="text-sm font-semibold text-accent transition-colors">{exp.position}</h5>
                  <div className="flex flex-row items-center justify-between gap-5">
                    <div className="text-xs text-foreground/70 text-accent/70">{exp.company}</div>
                    <div className="px-2 py-0.5 flex items-center justify-center text-xs rounded-md bg-foreground/5 border border-foreground/10 text-[10px] text-gray-700 list-none whitespace-nowrap">{exp.year}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-full py-2 flex flex-col justify-center rounded-[.5rem] bg-grey-200 shadow">
              <div className="mb-[1rem] text-[1.75rem] font-semibold text-center">Can I add you here ?</div>
              {/* CTA */}
              <CallToAction />
            </div>
          </div>
          <div className="p-[1rem] col-span-1 md:col-span-2 row-span-1 md:row-span-1 border border-grey-200 bg-grey-100 shadow rounded-[1rem] animate-fade-in-7">
            <div className="mb-[.5rem]">
              <BentoTitle  icon="streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment" title="Beyond Coding" />
            </div>
            <div>
              <p className="text-xs mb-2 text-black">
                When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.
              </p>
              <p className="text-xs text-black">
                I Like, watching vlogs about Software Engineers, trying some designs from social media.
              </p>
            </div>
          </div>
          <div className="p-[1rem] col-span-1 md:col-span-2 row-span-1 md:row-span-1 border border-grey-200 bg-grey-100 shadow rounded-[1rem] animate-fade-in-8 ">
            <div className="mb-[.5rem]">
              <BentoTitle icon='carbon:blog' title='Recent Blog Posts' />
            </div>
            <div className="">
              <p>Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;