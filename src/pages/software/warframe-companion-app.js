import * as React from 'react'
import NavigationBar from '../../components/navigationbar'
import Helmet from "react-helmet"
import { Wrapper, Banner, MainArticle, ContentSection, Level1Header } from '../../components/maincontrols.js'
import ColumnFullWidth from '../../components/softwarecolumnfull'
import FooterSection from '../../components/footersection'

/* Font Awesome Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

/* Import Images */
import AppImage from '../images/software/warframeapp.png'

/* Render the main page content */
const WarframeDotNet = () => {
  const AppDownloadUrl = "";
  const AppMainHeader = "Warframe Companion App";
  const AppMainDescription = "A Warframe companion app under development, integrates with multiple data apis on the web.";
  const LatestVersion = "No Release Yet";

  const ContentDescription = "Our mission is to take all of the warframe websites (Warframe.Market, WarframeStats.us etc and put them all into on mega app which will contain all the information a player would need. Drop locations for items, drop chances, market prices, build guides, and more. The long term end game goal is a total inventory management system with future ambitions to integrate with DE's player data so the app can tell the player what they are missing and where they need to go to get what they need. The short term roadmap is to just get the program into an alpha release, build a website for it with its own restful api interfaces. Eventually users will be able to manually input inventory data to their programs. Our app is built on the .NET 5.0 Framework using MetroFramework for UI."
  const ContentImage = AppImage;
  const ContentImageAlt = "Warframe App Preview"
  const ContentRepoLink = "https://github.com/ZeroPointGaming/WarframeCompanionApp"

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
              <ColumnFullWidth postImageSrc={ContentImage} postDescription={ContentDescription} postImageAlt={ContentImageAlt} overflowImage="1"></ColumnFullWidth>

              <p className="repo-link">Click <a href={ContentRepoLink}>Here</a> to visit the github repository for this project.</p>
            </ContentSection>
        </MainArticle>

        <FooterSection />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3968373060464813" crossOrigin="anonymous"></script>
      </Wrapper>
  )
}

export default WarframeDotNet