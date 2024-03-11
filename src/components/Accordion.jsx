import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prev=>!prev);
  };

  return (
    <div className="">
      <div
        
        className=" p-3 focus:outline-none text-left"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span> <h3 className="text-lg font-medium">{title}</h3>
        
          {isOpen ? 
             <span class="fa fa-angle-up" />
           : 
            <span  class="fa fa-angle-down"/>
          }
          </span>
        
      </div>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className=" bg-slate-100">
        
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
