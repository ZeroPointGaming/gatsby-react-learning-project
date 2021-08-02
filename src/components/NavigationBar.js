import React, { useState } from 'react'

/* Load Drop Down Navigation Menus */
import { IRLItems, /* WebappItems, */ WebsiteItems, SoftwareItems, ConnectItems } from './dropdowns/menus';

const NavigationBar = () => {
    const [unsuedVar, setClick] = useState(false);
    const [websites, setWebsiteDropdown] = useState(false);
    const [software, setSoftwareDropdown] = useState(false);
    //const [webapps, setWebappDropdown] = useState(false);
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

    /*
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
    */

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
        <header id="header" className="alt reveal">
            <nav className="navMax navbar navbar-expand-lg navbar-dark">
                <ul>
                    <li className="nav-item dropdown" onMouseEnter={IrlOnMouseEnter} onMouseLeave={IrlOnMouseLeave}>
                        <a className="nav-link dropdown-toggle" onClick={closeMobileMenu} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">IRL Projects</a>
                        
                        <div className={irl ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                            {IRLItems.map((linkItem) => <a className="dropdown-item" href={linkItem.path}>{linkItem.title}</a>)}
                        </div>
                    </li>

                    <li className="nav-item dropdown" onMouseEnter={SoftwareOnMouseEnter} onMouseLeave={SoftwareOnMouseLeave}>
                        <a className="nav-link dropdown-toggle" onClick={closeMobileMenu} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Software Projects</a>
                        
                        <div className={software ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                            {SoftwareItems.map((linkItem) => <a className="dropdown-item" href={linkItem.path}>{linkItem.title}</a>)}
                        </div>
                    </li>

                    <li className="nav-item dropdown" onMouseEnter={WebsiteOnMouseEnter} onMouseLeave={WebsiteOnMouseLeave}>
                        <a className="nav-link dropdown-toggle" onClick={closeMobileMenu} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Website Projects</a>
                        
                        <div className={websites ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                            {WebsiteItems.map((linkItem) => <a className="dropdown-item" href={linkItem.path}>{linkItem.title}</a>)}
                        </div>
                    </li>

                    <li className="nav-item dropdown" onMouseEnter={ConnectOnMouseEnter} onMouseLeave={ConnectOnMouseLeave}>
                        <a className="nav-link dropdown-toggle" onClick={closeMobileMenu} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Connect With Us</a>
                        
                        <div className={connect ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                            {ConnectItems.map((linkItem) => <a className="dropdown-item" href={linkItem.path}>{linkItem.title}</a>)}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar