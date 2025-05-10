import React from 'react'

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle } : SectionTitleProps) => {
  return (
    <div>
      <h2 className='mb-[.5rem] text-[1.75rem] font-semibold'>{title}</h2>
      {subtitle && 
        <p className='text-grey-700 font-medium text-sm leading-tight text-justify'>
        {subtitle}
      </p>}
    </div>
  )
}

export default SectionTitle
