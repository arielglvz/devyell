import React from 'react'
import { Icon } from '@iconify/react';

interface BentoTitleProp {
  icon: string;
  title: string;
}

const BentoTitle = ({icon = "Icon", title = "Title"}: BentoTitleProp) => {
  return (
    <div className='w-full'>
      <div className="flex flex-row items-center gap-2">
        <Icon icon={icon} className="h-[1rem] w-[1rem] opacity-[.7]"/>
        <div className="text-md font-bold capitalize">{title}</div>
      </div>
    </div>
  )
}

export default BentoTitle
