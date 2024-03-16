import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prev=>!prev);
  };

  return (
    <>
       <div 
       className="w-full p-1  " 
        
        // className=" p-[20px] focus:outline-none text-left"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
       <div className="w-full border-black border-t-2 text-[20px]"><span >{title} 
       {isOpen ? 
             <span class="fa fa-angle-up" />
           : 
            <span  class="fa fa-angle-down"/>
          }
       
        </span>
        {isOpen && <div className="mt-3">{content}</div>}
        </div>
        
          
          
        
      </div>
      
   </>
  );
}

function Accordion({ items }) {
  return (
    
        <>
        <div className='w-full'>
      {items.map((item,id) => (
        <AccordionItem key={id} title={item.title} content={item.content} />
      ))}
      <hr className='w-full ml-1  border-black border-t-2'/>
      </div>
    </>
  );
}

export default Accordion;
