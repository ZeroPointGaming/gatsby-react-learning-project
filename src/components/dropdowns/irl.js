import './DropDown.css'
import React, { useState } from 'react';
import { IRLItems } from './menus';
import { DropDownMenu, DropDownLink, DropDownListItem } from './controls';

const IRLDropDown = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <DropDownMenu onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
          {IRLItems.map((linkItem) => <DropDownListItem><DropDownLink className={linkItem.cName} href={linkItem.path} onClick={() => setClick(false)}>{linkItem.title}</DropDownLink></DropDownListItem>)}
        </DropDownMenu>
      </>
    );
  }
  
  export default IRLDropDown;