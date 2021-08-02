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
import AppImage from '../images/software/dlm.png'

/* Render the main page content */
const SimpleDownloadManager = () => {
  const AppDownloadUrl = "https://github.com/ZeroPointGaming/SimpleDownloadManager/releases/download/1.1/BatchDownloadManager.exe";
  const AppMainHeader = "Windows Batch Download Manager";
  const AppMainDescription = "Downloads a batch list of links in the order they were added.";
  const LatestVersion = "v1.1";

  const ContentDescription = "Add a list of links to the textbox on the left click add, each link will be added to the list on the right, click download and the files will be downloaded to the place you selected them to be saved to."
  const ContentImage = AppImage;
  const ContentImageAlt = "Windows Download Manager Preview"
  const ContentRepoLink = "https://github.com/ZeroPointGaming/SimpleDownloadManager/releases"

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

export default SimpleDownloadManager