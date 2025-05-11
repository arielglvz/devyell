interface NoteProps {
  note?: boolean;
}

const CallToAction = ({note}: NoteProps) => {

  return (
    <div className="relative flex flex-col items-center z-1 gap-9">
      <div className="relative flex items-center gap-1 z-4">
        <button 
          onClick={() => window.location.href ="mailto:your-email@example.com"}
          className='bg-black text-white text-center rounded-[50px] px-[1.25rem] py-[0.75rem] hover:bg-grey-900 transition-all duration-400 cursor-pointer'
        >
          Email
        </button>
        <button 
          className='bg-grey-300 text-black rounded-[50px] px-[1.25rem] py-[0.75rem] flex gap-2 font-semibold hover:bg-white hover:shadow-lg transition-all duration-400 cursor-pointer'
          onClick={() => window.open("https://calendar.google.com/calendar/u/0?cid=YXJpZWxnbHZ6QGdtYWlsLmNvbQ", "_blank")}
        >
          Book a call
        </button>
      </div>
      {note && (
        <div className="px-2 text-[#2229] text-center font-semibold text-[.75rem]">
        <span className="text-red-700">*Disclaimer:</span> This website is inspired by <span className='text-grey-900'>theoutline.design</span> and tried to re-create it with my own twist.
      </div>
      )}
    </div>
  )
}

export default CallToAction