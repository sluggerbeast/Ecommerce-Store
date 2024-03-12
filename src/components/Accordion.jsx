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
       <div className="w-full border-black border-t-2"><span >{title} 
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
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} content={item.content} />
      ))}
      <hr className='w-full ml-1  border-black border-t-2'/>
    </>
  );
}

export default Accordion;
