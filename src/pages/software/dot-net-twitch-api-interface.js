import * as React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Helmet from "react-helmet"
import { Wrapper, Banner, MainArticle, ContentSection, MajorHeader, Level2Header, Row, Level3Header } from '../../components/maincontrols.js'
import DualItemColumn from '../../components/column6u12u'
import ColumnFullWidth from '../../components/columnfullwidth'
import FooterSection from '../../components/FooterSection'

/* Render the main page content */
const DotNetTwitchAPIInterface = () => {
  
  return (
      <Wrapper>
        <Helmet>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <script src="https://embed.twitch.tv/embed/v1.js"></script>3
        </Helmet>

        {/* Navigation Header */}
        <NavigationBar/>

        {/* Header Banner */}
        <Banner />

        <MainArticle>
          {/* Main Games Section */}
          <ContentSection className="container">

          </ContentSection>
        </MainArticle>

        <FooterSection />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3968373060464813" crossOrigin="anonymous"></script>
      </Wrapper>
  )
}

export default DotNetTwitchAPIInterface