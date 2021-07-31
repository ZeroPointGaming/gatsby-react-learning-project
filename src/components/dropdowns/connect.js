import './DropDown.css'
import React, { useState } from 'react';
import { ConnectItems } from './menus';
import { DropDownMenu, DropDownListItem, DropDownLink } from './controls';

const ConnectDropDown = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <DropDownMenu onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
          {ConnectItems.map((linkItem) => <DropDownListItem><DropDownLink className={linkItem.cName} href={linkItem.path} onClick={() => setClick(false)}>{linkItem.title}</DropDownLink></DropDownListItem>)}
        </DropDownMenu>
      </>
    );
  }
  
  export default ConnectDropDown;