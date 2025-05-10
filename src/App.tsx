import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { cards, services } from './data';
import Works from './components/Works';
import Services from './components/Services';
import About from './components/About';
import Details from './components/Details';
import { BoatWithFriends, ClonedSite, FamPic, GhibliFam, HobbyPage, LandingPages, SwimmingWithFriends, TopViewSelfieBeach, VideokeWithFriends } from './assets/images';

function App() {
  const [onHover, setOnHover] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const handleMouseEnter = (id:number) => {
    setOnHover(true);
    setCardId(id);
  }
  
  const handleMouseLeave = () => {
    setOnHover(false);
  }

  const handleModal = (id:number) => {
    setCardId(id);
    setIsShow((prev) => !prev);
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
  
    if (isShow) {
      setIsMounted(true);
    } else {
      // Delay unmounting to allow exit animation
      timeout = setTimeout(() => setIsMounted(false), 300); // 500ms = animation duration
    }
  
    // Cleanup
    return () => clearTimeout(timeout);
  }, [isShow]);

  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.classList.toggle("overflow-hidden", isShow);
  }, [isShow])

  return (
    <main className='min-w-[375px]'>
      <section className="bg-grey-200 flex justify-center items-center h-full md:h-svh p-[1rem] relative">
        <div className="relative w-full h-full pt-[1.25rem] pb-[2.5rem] bg-white rounded-[20px] flex flex-col justify-between items-center gap-[5rem] overflow-hidden shadow">
          {/* Brand */}
          <div className="mx-auto flex items-center">
            <Icon icon="ic:outline-logo-dev" className="h-[35px] w-[35px]"/>
            <span className="font-bold text-[#a7a7a7] hover:animate-pulse">YELL</span>
          </div>

          {/* Content */}
          <div className="px-4 relative flex flex-col items-center gap-8 z-4 ">
            {/* hero text */}
            <div className="w-full lg:max-w-[32rem]">
              <h1 className='mt-0 mb-0 text-center text-[1.75rem] font-bold leading-snug'>
                I'm a <span className="text-grey-700">minimalist</span> Frontend Developer <span className="text-grey-500">since 2022</span>
              </h1>
            </div>
            {/* cards */}
            <div className="relative flex flex-col md:flex-row gap-2 w-full max-w-[41.5rem] min-h-[12.5rem]">
              {/* Card-- work */}
              {cards.map((card) => (
                <div 
                  key={card.id}
                  onMouseEnter={() => handleMouseEnter(card.id)} 
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleModal(card.id)}
                  className="border-2 border-grey-200 bg-grey-100 rounded-[20px] flex flex-1 hover:basis-[10%] transition-all duration-700 cursor-pointer"
                >
                  <div className="w-full h-full p-[1rem] flex flex-col items-center gap-5 font-semibold">
                    <div className="relative w-full h-[7.5rem] flex justify-center items-center z-2">
                      <Icon icon={`${card.icon}`} className="transform-gpu w-full h-full text-grey-600" />
                    </div>  
                    <div className='text-grey-900'>{card.name}</div>
                  </div>
                </div>
              ))}
              {/* Details */}
              <div className={`${onHover && cardId === 4 ? "md:opacity-[1] md:[inset:20%_-22%_auto_auto]" : "opacity-[0] md:[inset:20%_0%_auto_auto]"} opacity-0 -z-1 absolute flex flex-col items-start gap-1 transition-all duration-700 delay-300`}>
                <div className={`${onHover && cardId === 4 ? "rotate-z-[-8deg]" : "rotate-z-[0deg]"} relative p-[0.5rem_1rem] rounded-[20px] transform translate-x-0 translate-y-[-90deg] scale-100 rotate-x-[0] rotate-y-0 rotate-z-[-4deg] skew-x-0 skew-y-0 preserve-3d bg-grey-100 transition-all duration-700`}>Resume</div>
                <div className="relative p-[0.5rem_1rem] rounded-[20px] bg-yellow-200">Testimonials</div>
                <div className={`${onHover && cardId === 4 ? "rotate-z-[9deg]" : "rotate-z-[0deg]"} relative p-[0.5rem_1rem] rounded-[20px] transform translate-x-0 translate-y-[-90deg] scale-100 rotate-x-[0] rotate-y-0 skew-x-0 skew-y-0 preserve-3d bg-violet-200 transition-all duration-700`}>Contacts</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative flex flex-col items-center z-1 gap-9">
            <div className="relative flex items-center gap-1 z-4">
              <button className='bg-black text-white text-center rounded-[50px] px-[1.25rem] py-[0.75rem] hover:bg-grey-900 transition-all duration-400 cursor-pointer'>Email</button>
              <button className='bg-grey-300 text-black rounded-[50px] px-[1.25rem] py-[0.75rem] flex gap-2 font-semibold hover:bg-white hover:shadow-lg transition-all duration-400 cursor-pointer'>Book a call</button>
            </div>
            <div className="text-[#2229] text-center font-semibold text-[.75rem]">
            <span className="text-red-700">*Disclaimer:</span> This website is inspired by <span className='text-grey-900'>theoutline.design</span> and tried to re-create it with my own twist.
            </div>
          </div>
          
          {/* Work-hover effect */}
          <div className={`${onHover && cardId === 1 ? "opacity-[1]" : "opacity-[0]"} w-[17vw] absolute inset-[9%_auto_auto_6%] transition-all duration-700`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <img 
              src={ClonedSite} 
              alt="image 1" 
              className="inline-block max-w-full w-full h-full"
              loading='lazy'
            />
          </div>
          <div className={`${onHover && cardId === 1 ? "opacity-[1]" : "opacity-[0]"} w-[17vw] absolute inset-[8%_5%_auto_auto] transition-all duration-700`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <img 
              src={LandingPages} 
              alt="image 1" 
              className="inline-block max-w-full w-full h-full" 
              loading='lazy'
            />
          </div>
          <div className={`${onHover && cardId === 1 ? "opacity-[1]" : "opacity-[0]"} w-[20vw] absolute inset-[auto_auto_3%_4%] transition-all duration-700`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <img 
              src={HobbyPage} 
              alt="image 1" 
              className="inline-block max-w-full w-full h-full" 
              loading='lazy'
            />
          </div>
          <div className={`${onHover && cardId === 1 ? "opacity-[1]" : "opacity-[0]"} w-[17vw] absolute inset-[auto_7%_8%_auto] rotate-4 transition-all duration-700`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <img 
              src="https://cdn.prod.website-files.com/653437233b349b44eda5816c/65e4df7ac9dc54431950668f_Hover-asset-4.png" 
              alt="image 1" 
              className="inline-block max-w-full w-full h-full" 
              loading='lazy'
            />
          </div>

          {/* Services-hover effect */}
          <div className={`${onHover && cardId === 2 ? "opacity-[1] z-6" : "opacity-[0]" } hidden md:flex gap-[1.5rem] absolute w-[46.875rem] h-[12.5rem] inset-[auto_auto_4%] transition-all duration-700`}>
            { services.map((service) => (
              <div key={service.id} className="relative p-[1.25rem] pt-[3.75rem] w-full rounded-[20px] bg-gradient-to-r from-grey-200 to-grey-100 flex flex-col gap-6 font-semibold overflow-hidden">
                <div className="leading-[1.25] w-[145px] text-wrap">{service.title}</div>
                <img 
                  className='rounded-[12px]'
                  src={service.img}
                  alt="what-we-do_image" 
                  loading='lazy' 
                />
              </div>
            ))}
          </div>

          {/* About-hover effect */}
          <div className={`${onHover && cardId === 3 ? "opacity-[1] z-6 " : "opacity-[0]" } w-full max-w-[50rem] h-[35vh absolute inset-[auto_auto_0%] transition-all duration-700`}>
            <div className={`absolute z-3 w-[11.25rem] h-[13rem] rounded-[14px] inset-[auto_auto_-15%_-8%] overflow-hidden ${(onHover && cardId) === 3 ? "transform translate-y-[0]" : "translate-y-[140px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d" } transition-all duration-1000 select-none delay-100`}>
              <img 
                src={GhibliFam}
                alt="A black and white dog sitting in front of a stair case." 
                className="object-cover object-[50%_24%] w-full h-full" 
                loading='lazy'
               />
            </div>
            <div className={`absolute w-[15.25rem] h-[18rem] rounded-[14px] inset-[auto_auto_5%_15%] overflow-hidden ${(onHover && cardId) === 3 ? "transform translate-y-[0]" : "translate-y-[140px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d" } transition-all duration-500 delay-75  blur-[.1px] brightness-80`}>
              <img 
                src={TopViewSelfieBeach}
                alt="A black and white dog sitting in front of a stair case." 
                className="object-cover object-[50%_24%] w-full h-full" 
                loading='lazy'
               />
            </div>
            <div className={`absolute z-3 w-max h-[170px] rounded-[14px] inset-[auto_11%_10%_46%] overflow-hidden ${(onHover && cardId) === 3 ? "transform translate-y-[0]" : "translate-y-[140px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d" } transition-all duration-800 delay-150 blur-[.1px] brightness-80`}>
              <img 
                src={VideokeWithFriends}
                alt="A black and white dog sitting in front of a stair case." 
                className="object-cover object-[50%_24%] w-full h-full" 
                loading='lazy'
               />
            </div>
            <div className={`absolute w-[11.25rem] h-max rounded-[14px] inset-[auto_2%_-3%_75%] overflow-hidden ${(onHover && cardId) === 3 ? "transform translate-y-[0]" : "translate-y-[140px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d" } transition-all duration-800 blur-[.1px] brightness-80`}>
              <img 
                src={SwimmingWithFriends}
                alt="A black and white dog sitting in front of a stair case." 
                className="object-contain w-full h-full blur-[.1px] brightness-80" 
                loading='lazy'
               />
            </div>
            <div className={`absolute z-2 w-max h-[150px] rounded-[14px] inset-[auto_auto_3%_98%] overflow-hidden ${(onHover && cardId) === 3 ? "transform translate-y-[0]" : "translate-y-[140px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d" } transition-all duration-800 delay-230  blur-[.1px] brightness-80`}>
              <img 
                src={BoatWithFriends}
                alt="A black and white dog sitting in front of a stair case." 
                className="object-cover object-[50%_24%] w-full h-full" 
                loading='lazy'
               />
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {isMounted &&
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal={true} onClick={() => setIsShow(false)}>
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden={!isShow}></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto min-w-[375px]">
            <div className="w-screen flex min-h-full items-start justify-center p-4 text-center sm:p-0 transition-all duration-700">
              <div 
                onClick={(e) => e.stopPropagation()}
                className={`relative transform overflow-hidden text-left transition-all my-8 w-full max-w-full md:max-w-[80vw] lg:max-w-[60vw] ${isShow ? "animate-fade-enter" : "animate-fade-exit"}`}
              >
                { cardId === 1 && <Works /> }
                { cardId === 2 && <Services /> }
                { cardId === 3 && <About /> }
                { cardId === 4 && <Details /> }
                <div className="p-[1.5rem_0] flex items-center justify-center">
                  <button 
                    onClick={() => setIsShow(false)}
                    className='p-[0.5rem_1rem] rounded-[20px] bg-grey-300 flex flex-nowrap items-center font-bold text-[1.5vh] cursor-pointer'
                  >
                    Close 
                    <Icon icon="material-symbols:close" className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  )
}

export default App
