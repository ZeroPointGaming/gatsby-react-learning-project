import './DropDown.css'
import React, { useState } from 'react';
import { SoftwareItems } from './menus';
import { DropDownMenu, DropDownListItem, DropDownLink } from './controls';

const SoftwareDropDown = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
         <DropDownMenu onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
          {SoftwareItems.map((linkItem) => <DropDownListItem><DropDownLink className={linkItem.cName} href={linkItem.path} onClick={() => setClick(false)}>{linkItem.title}</DropDownLink></DropDownListItem>)}
        </DropDownMenu>
      </>
    );
  }
  
  export default SoftwareDropDown;