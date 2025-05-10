import Accordion from './ui/Accordion'
import { services } from '../data'
import SectionTitle from './ui/SectionTitle'

const Services = () => {
  return (
    <div className='w-full h-full bg-white p-[2rem_1.5rem] rounded-lg'>
      <SectionTitle 
        title='Services'
        subtitle="We team up with founders and startups to bring their ideas to life—whether it's a simple landing page, a complete website, or mobile and web apps."
      />
      <div className="mt-5">
        <Accordion data={services}/>
      </div>
    </div>
  )
}

export default Services
