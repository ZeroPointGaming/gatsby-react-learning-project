import * as React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Helmet from "react-helmet"
import { Wrapper, Banner, MainArticle, ContentSection, Level1Header } from '../../components/maincontrols.js'
import ColumnFullWidth from '../../components/SoftwareColumnFull'
import FooterSection from '../../components/FooterSection'

/* Font Awesome Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

/* Import Images */
import AppImage from '../images/software/inventorymanagercs.png'

/* Render the main page content */
const InventorySystem = () => {
  const AppDownloadUrl = "https://github.com/ZeroPointGaming/InventoryManagmentSystem/releases/download/1.0.21.0531/InventoryManagmentSystem.exe";
  const AppMainHeader = "INVENTORY MANAGMENT SYSTEM";
  const AppMainDescription = "A system for managing a inventory of products using binary serialization to save and load data to and from the local storage. This implements some basic implementations of class usage, IO streams, and binary object encryption. This project was built in C# using Visual Studio.";
  const LatestVersion = "v1.0";

  const ContentDescription = "A system for managing a inventory of products using binary serialization to save and load data to and from the local storage. This implements some basic implementations of class usage, IO streams, and binary object encryption. This project was built in C# using Visual Studio. Binary object serialization has since been depriciated, its now common practice to use json or xml schemas to store your object data."
  const ContentImage = AppImage;
  const ContentImageAlt = "Inventory Manager Preview"
  const ContentRepoLink = "https://github.com/ZeroPointGaming/InventoryManagmentSystem"

  return (
      <Wrapper>
        <Helmet>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <script src="https://embed.twitch.tv/embed/v1.js"></script>
        </Helmet>

        {/* Navigation Header */}
        <NavigationBar/>

        {/* Header Banner */}
        <Banner />

        <MainArticle>
            <header className="special container">
                <span className="icon fa-download">
                    <a href={AppDownloadUrl}><FontAwesomeIcon icon={faDownload} size="3x" /></a>
                </span>

                <Level1Header>{AppMainHeader}</Level1Header>
                <p>{AppMainDescription}</p>
            </header>

            <ContentSection className="container">
              <p className="repo-link">Latest Version: {LatestVersion}</p>
              <ColumnFullWidth postImageSrc={ContentImage} postDescription={ContentDescription} postImageAlt={ContentImageAlt}></ColumnFullWidth>

              <p className="repo-link">Click <a href={ContentRepoLink}>Here</a> to visit the github repository for this project.</p>
            </ContentSection>
        </MainArticle>

        <FooterSection />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3968373060464813" crossOrigin="anonymous"></script>
      </Wrapper>
  )
}

export default InventorySystem