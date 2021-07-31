import './DropDown.css'
import React, { useState } from 'react';
import { WebappItems } from './menus';
import { DropDownMenu, DropDownLink, DropDownListItem } from './controls'

const WebAppDropDown = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <DropDownMenu onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
          {WebappItems.map((linkItem) => 
            <DropDownListItem>
              <DropDownLink className={linkItem.cName} href={linkItem.path} onClick={() => setClick(false)}>{linkItem.title}</DropDownLink>
            </DropDownListItem>)}
        </DropDownMenu>
      </>
    );
  }
  
  export default WebAppDropDown;