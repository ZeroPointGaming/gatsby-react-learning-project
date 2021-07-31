import React, { useState } from 'react'

/* Load Drop Down Navigation Menus */
import WebsiteDropDown from './dropdowns/websites'
import SoftwareDropDown from './dropdowns/software'
import WebAppDropDown from './dropdowns/webapps'
import IRLDropDown from './dropdowns/irl'
import ConnectDropDrown from './dropdowns/connect'

/* Import Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faCaretDown, } from '@fortawesome/free-solid-svg-icons'

/* Import Navigation Style Components */
import './NavigationBar.css'
import { NaviBar, NavLink, NavItem, NavMenu } from './dropdowns/controls'

const NavigationBar = ({ pageTitle, children }) => {
    const [click, setClick] = useState(false);
    const [websites, setWebsiteDropdown] = useState(false);
    const [software, setSoftwareDropdown] = useState(false);
    const [webapps, setWebappDropdown] = useState(false);
    const [connect, setConnectDropdown] = useState(false);
    const [irl, setIrlDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const WebsiteOnMouseEnter = () => {
        if (window.innerWidth < 960) {
            setWebsiteDropdown(false);
        } else {
            setWebsiteDropdown(true);
        }
    };

    const WebsiteOnMouseLeave = () => {
        if (window.innerWidth < 960) {
            setWebsiteDropdown(false);
        } else {
            setWebsiteDropdown(false);
        }
    };

    const SoftwareOnMouseEnter = () => {
        if (window.innerWidth < 960) {
            setSoftwareDropdown(false);
        } else {
            setSoftwareDropdown(true);
        }
    };

    const SoftwareOnMouseLeave = () => {
        if (window.innerWidth < 960) {
            setSoftwareDropdown(false);
        } else {
            setSoftwareDropdown(false);
        }
    };

    const ConnectOnMouseEnter = () => {
        if (window.innerWidth < 960) {
            setConnectDropdown(false);
        } else {
            setConnectDropdown(true);
        }
    };

    const ConnectOnMouseLeave = () => {
        if (window.innerWidth < 960) {
            setConnectDropdown(false);
        } else {
            setConnectDropdown(false);
        }
    };

    const WebappOnMouseEnter = () => {
        if (window.innerWidth < 960) {
            setWebappDropdown(false);
        } else {
            setWebappDropdown(true);
        }
    };

    const WebappOnMouseLeave = () => {
        if (window.innerWidth < 960) {
            setWebappDropdown(false);
        } else {
            setWebappDropdown(false);
        }
    };

    const IrlOnMouseEnter = () => {
        if (window.innerWidth < 960) {
            setIrlDropdown(false);
        } else {
            setIrlDropdown(true);
        }
    };

    const IrlOnMouseLeave = () => {
        if (window.innerWidth < 960) {
            setIrlDropdown(false);
        } else {
            setIrlDropdown(false);
        }
    };

    return (
        <>
            <NaviBar>
                <NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
                    <NavItem onMouseEnter={WebsiteOnMouseEnter} onMouseLeave={WebsiteOnMouseLeave}>
                        <NavLink href="" onClick={closeMobileMenu}>Website Projects <FontAwesomeIcon icon={faCaretDown} size='1x'/></NavLink>
                        {websites && <WebsiteDropDown />}
                    </NavItem>

                    <NavItem onMouseEnter={SoftwareOnMouseEnter} onMouseLeave={SoftwareOnMouseLeave}>
                        <NavLink href="" onClick={closeMobileMenu}>Software Projects <FontAwesomeIcon icon={faCaretDown} size='1x'/></NavLink>
                        {software && <SoftwareDropDown />}
                    </NavItem>

                    <NavItem onMouseEnter={WebappOnMouseEnter} onMouseLeave={WebappOnMouseLeave}>
                        <NavLink href="" onClick={closeMobileMenu}>WebApp Projects <FontAwesomeIcon icon={faCaretDown} size='1x'/></NavLink>
                        {webapps && <WebAppDropDown />}
                    </NavItem>

                    <NavItem onMouseEnter={IrlOnMouseEnter} onMouseLeave={IrlOnMouseLeave}>
                        <NavLink href="" onClick={closeMobileMenu}>IRL Projects <FontAwesomeIcon icon={faCaretDown} size='1x'/></NavLink>
                        {irl && <IRLDropDown />}
                    </NavItem>

                    <NavItem onMouseEnter={ConnectOnMouseEnter} onMouseLeave={ConnectOnMouseLeave}>
                        <NavLink href="" onClick={closeMobileMenu}>Connect With Us <FontAwesomeIcon icon={faCaretDown} size='1x'/></NavLink>
                        {connect && <ConnectDropDrown />}
                    </NavItem>
                </NavMenu>
            </NaviBar>
        </>
    )
}

export default NavigationBar