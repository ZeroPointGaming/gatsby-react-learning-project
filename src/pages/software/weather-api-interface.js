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
import AppImage from '../images/software/weatherviewer.png'

/* Render the main page content */
const WeatherViewer = () => {
  const AppDownloadUrl = "https://github.com/ZeroPointGaming/WeatherAppViaJSONApi/releases/download/1.0/WeatherAppViaJSONApi.exe";
  const AppMainHeader = "WEATHER APPLICATION USING JSON API RESPONSE";
  const AppMainDescription = "Shows you the weather for your local area.";
  const LatestVersion = "v1.0";

  const ContentDescription = "Displays local weather data and uses multiple json api integrations for location and weather services."
  const ContentImage = AppImage;
  const ContentImageAlt = "Weather Viewer Preview"
  const ContentRepoLink = "https://github.com/ZeroPointGaming/WeatherAppViaJSONApi"

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

export default WeatherViewer