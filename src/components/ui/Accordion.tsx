import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface DataItem {
  id: number;
  title: string;
  desc: string;
  img?: string;
  [key: string]: unknown; // Allows dynamic properties
}

interface AccordionProps {
  data: DataItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const handleAccordion = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle only the clicked item
    }));
  };

  return (
    <div className="h-max w-full flex flex-col gap-2">
      {data?.map((item) => (
        <div
          className={`p-[1.25rem_1.5rem] h-max bg-grey-100 rounded-[1rem] transition-all duration-700 cursor-pointer`}
          key={item?.id}
          onClick={() => handleAccordion(item?.id)}
        >
          <div className={`${openItems[item?.id] && "mb-4"} flex justify-between`}>
            <h3 className="font-semibold">{item?.title}</h3>
            <Icon
              icon="material-symbols:add-2-rounded"
              className={`${openItems[item?.id] && "rotate-[225deg]"} transition-all duration-700 cursor-pointer`}
            />
          </div>
          <div className={`${openItems[item?.id] ? "h-[200px]" : "h-0"} overflow-hidden transition-all duration-700`}>
            <div className="overflow-hidden">
              <h4 className="mb-4 text-grey-600 font-medium">{item?.desc}</h4>
              {item.img && <img src={item?.img} alt={item?.title} className="object-cover object-[50%_0%] w-full h-full" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
