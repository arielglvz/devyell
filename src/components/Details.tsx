import SectionTitle from './ui/SectionTitle'
import BentoTitle from './ui/BentoTitle'
import { Icon } from '@iconify/react';

const Details = () => {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'ariel-galvez-cv.pdf'; // Make sure this path is correct
    link.download = 'ariel-galvez-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className='w-full h-full bg-white p-[2rem_1.5rem] rounded-lg'>
      <SectionTitle title="Details" />
      <div className="h-max w-full flex flex-col md:flex-row   gap-2">
        <div className="bento-card rounded-[12px] w-full md:w-max">
          <BentoTitle icon="material-symbols:linked-services-outline" title="Let's Connect" />
          <div className="mt-4">
            <div className='mb-2'>
              <p className="text-xs text-foreground/70 mb-2">Email</p>
              <div 
                onClick={() => {window.location.href = 'mailto:your-email@example.com'}}
                className="px-3 py-2 rounded-md bg-grey-100 hover:bg-blue-200 transition-colors flex justify-between items-center cursor-pointer"
              >
                <span className="text-sm font-medium">arielglvz@gmail.com</span>
              </div>
            </div>
            <div className='mb-2'>
              <p className="text-xs text-foreground/70 mb-2">Let's Talk</p>
              <div 
                onClick={() => window.open("https://calendar.google.com/calendar/u/0?cid=YXJpZWxnbHZ6QGdtYWlsLmNvbQ", "_blank")}
                className="px-3 py-2 rounded-md bg-grey-100 hover:bg-violet-200 transition-colors flex justify-between items-center cursor-pointer"
              >
                <span className="text-sm font-medium">Schedule a Call</span>
                <Icon icon="material-symbols:arrow-forward" className='h-5 w-5 opacity-[.7]' />
              </div>
            </div>
            <div className='mb-2'>
              <p className="text-xs text-foreground/70 mb-2">My CV</p>
              <div 
                onClick={downloadCV}
                className="px-3 py-2 rounded-md bg-grey-100 hover:bg-yellow-200 transition-colors flex justify-between items-center cursor-pointer"
              >
                <span className="text-sm font-medium">Download CV</span>
                <Icon icon="material-symbols:download" className='h-5 w-5 opacity-[.7]' />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-foreground/70 mb-2">Social Links</p>
            <div className='flex flex-row justify-between'>
              <div 
                onClick={() => window.open("https://www.linkedin.com/in/arielglvz/", "_blank")}
                className="w-max px-3 py-2 rounded-md bg-gray-100 hover:bg-blue-500 cursor-pointer group"
              >
                <Icon icon="mdi:linkedin" className='h-6 w-6 opacity-[.7] fill-current text-gray-900 group-hover:text-white' />
              </div>
              <div 
                onClick={() => window.open("https://github.com/arielglvz", "_blank")}
                className="w-max px-3 py-2 rounded-md bg-gray-100 hover:bg-grey-900 cursor-pointer group"
                >
                <Icon icon="mdi:github-box" className='h-6 w-6 opacity-[.7] fill-current text-gray-900 group-hover:text-white' />
              </div>
              <div 
                onClick={() => window.open("https://www.instagram.com/arielglvz", "_blank")}
                className="w-max px-3 py-2 rounded-md bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 cursor-pointer group"
              >
                <Icon icon="mdi:instagram" className='h-6 w-6 opacity-[.7] fill-current text-gray-900 group-hover:text-white' />
              </div>
            </div>
          </div>
        </div>
        <div className="bento-card rounded-[12px] w-full">
          <div className="flex justify-between items-center gap-5">
            <BentoTitle icon="ic:sharp-rate-review" title="Testimonials"/>
            <div className="flex flex-row items-center flex-nowrap">
              <p className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors text-nowrap cursor-pointer">View All</p>
              <Icon icon="material-symbols:arrow-forward-ios-rounded" className='h-[12px] w-[12px] opacity-[.7]' />
            </div>
          </div>
          <div className="py-[1rem]">
            Coming Soon...
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
