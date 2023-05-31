import { useState } from "react";
import "./Accordion.scss";
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown}from "react-icons/md"

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
  }) => {
    const toggleSection = () => {
      const nextIndex = isActiveSection ? null : sectionIndex;
      setActiveIndex(nextIndex);
    };
    return (
      <div className={`item fadeInRight ${sectionIndex % 2 === 0 && 'gray'}`} data-anime="1600">
        <div className="title" onClick={toggleSection}>
          <h4 className="font-1-m-b color-11">{section.title}</h4>
          <div>{isActiveSection ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp/>}</div>
        </div>        
          <p className={`font-1-s color-9 ${isActiveSection ? 'show' : 'hide'}`} >{section.content}</p>
      </div>
    );
  };
  
  const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
      <div className="accordion container">
        {sections.map((section, index) => (
          <AccordionSection
            section={section}
            key={index}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        ))}
      </div>
    );
  };
export default Accordion;