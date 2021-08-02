import * as React from 'react'
import NavigationBar from '../components/NavigationBar'
import Helmet from "react-helmet"
import { Wrapper, Banner, MainArticle, ContentSection, MajorHeader, Level2Header, Row, Level3Header } from '../components/maincontrols.js'
import DualItemColumn from '../components/column6u12u'
import ColumnFullWidth from '../components/columnfullwidth'
import TwitchChannelEmbed from '../components/TwitchEmbed'
import FooterSection from '../components/FooterSection'

/* Import static images for the main page | TODO - Add new games to list*/
import Tarkov from "./images/games/tarkov.png"
import KSP from "./images/games/ksp-min.jpg"
import Arma from "./images/games/arma3-min.jpg"
import WarThunder from "./images/games/warthunder-min.jpg"
import Rust from "./images/games/rust-min.png"
import Warframe from "./images/games/warframe-min.jpg"
//import CoDMW from "./images/games/cod.png"
import FalloutHeader from "./images/games/fallout-min.jpg"
import TwitchDualItemColumn from '../components/TwitchDualColumn'
import SevenDays from "./images/games/7days-min.jpg"
import SpaceEngineers from "./images/games/spaceengineers-min.jpg"
import HaloHeader from "./images/games/halo-min.jpg"

/* Import static images for twitch content section */
import HardWare from './images/twitchbanners/hardware.jpg'
import AboutMe from './images/twitchbanners/about.jpg'
import Schedule from './images/twitchbanners/schedule.jpg'
import Youtube from './images/twitchbanners/youtube.jpg'

/* Render the main page content */
const IndexPage = () => {
  
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
            <MajorHeader><Level2Header className="bold">The Games We Play, Record, and Stream</Level2Header></MajorHeader>

            <Row>
              <DualItemColumn postImageHref="" postImageSrc={Tarkov} postImageAlt="#ZootGang #Tarkov" postHeader="ESCAPE FROM TARKOV" postDescription="Escape From Tarkov, a hardcore first person shooter survival game with extensively modernized gameplay elements not seen in any other games. In Escape From Tarkov not only do you have to battle AI controlled scavs, your own hunger and thirst, and the complex combat system, you also have to be aware of other players like yourself, all while hoarding what loot you can manage to find to take it home to your stash."></DualItemColumn>

              <DualItemColumn postImageHref="" postImageSrc={KSP} postImageAlt="#ZootGang #KSP" postHeader="KERBAL SPACE PROGRAM" postDescription="Kerbal Space Program is a space flight simulation video game developed and published by Squad. In the game, players direct a nascent space program, staffed and crewed by green humanoid aliens known as 'Kerbals'."></DualItemColumn>
            </Row>

            <Row>
              <DualItemColumn postImageHref="" postImageSrc={Arma} postImageAlt="#ZootGang #Arma3" postHeader="ARMA 3" postDescription="Arma 3 is a classic military simulation game. Large maps where missions of any kind can happen, anything from night time spec ops to air based jtac operations. Fly, ride or die in this slow paced realism fps simulator. You can most often find us playing Exile, Invade and Annex, Wasteland or custom operations. Come say hi and join into the fun!"></DualItemColumn>

              <DualItemColumn postImageHref="" postImageSrc={WarThunder} postImageAlt="#ZootGang #WarThunder" postHeader="WAR THUNDER" postDescription="We are members of =ECM= and have thousands of hours of experience flying and tanking. From simulator to arcade, we have pilots who are skilled all across the board. If you think you have what it takes, challenge one of our top members and if you can beat them, ask to join our great squadron and you might just find yourself flying with a squad of aces, Good luck pilot!"></DualItemColumn>
            </Row>

            <Row>
              <ColumnFullWidth postImageHref="" postImageSrc={FalloutHeader} postImageAlt="#ZootGang #Fallout #Fallout4 #Fallout3 #FalloutNV" postHeader="The Fallout Series" postDescription="The Fallout franchise is one of my utmost favorite game series ever released on pc. Developed oirinally by Black Isle Studios, handed off to Micro Forte and 14 Degrees East, then later aquired by Bethesda Softworks and Obsidian Entertainment with the development of some of my absolute favorites: Fallout 3, Fallout 4, and Fallout New Vegas."></ColumnFullWidth>
            </Row>
            
            <Row>
              <DualItemColumn postImageHref="" postImageSrc={Warframe} postImageAlt="#ZootGang #WARFRAME" postHeader="WARFRAME" postDescription="Are you a space ninja fanatic, so are we, come join the JSOC clan on Warframe and get into a group where everyone matters. Our fully equipped clan dojo will cater to your every need."></DualItemColumn>

              <DualItemColumn  postImageHref="" postImageSrc={Rust} postImageAlt="#ZootGang #Rust" postHeader="RUST EXPERIMENTAL" postDescription="We play rust experimental, a hardcore, multiplayer-only survival game where players are pitted against each other for power and survival, go it alone or join a clan to take over a server."></DualItemColumn>
            </Row>

            <Row>
              <DualItemColumn postImageHref="" postImageSrc={SevenDays} postImageAlt="#ZootGang #SevenDaysToDie" postHeader="Seven Days To Die" postDescription="7 Days to Die has defined the survival genre, with unrivaled crafting and world-building content. Set in a brutally unforgiving post-apocalyptic world overrun by the undead, 7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. It presents combat, crafting, looting, mining, exploration, and character growth, in a way that has seen a rapturous response from fans worldwide. Play the definitive zombie survival sandbox RPG that came first."></DualItemColumn>

              <DualItemColumn  postImageHref="" postImageSrc={SpaceEngineers} postImageAlt="#ZootGang #SpaceEngineers" postHeader="Space Engineers" postDescription="Space Engineers is a voxel-based sandbox game, developed and published by Czech independent developer Keen Software House. In 2013, the initial developmental release of the game joined the Steam early access program. During the following years of active development, Space Engineers sold over one million units."></DualItemColumn>
            </Row>

            <Row>
              <ColumnFullWidth postImageHref="" postImageSrc={HaloHeader} postImageAlt="#ZootGang #Halo3 #Halo2 #Halo #Halo4 #Halo3ODST #Halo5 #HaloWars
              #HaloInfinite" postHeader="The Halo Franchise" postDescription="The original trilogy centers on an interstellar war between humanity and an alliance of aliens known as The Covenant. The Covenant, led by their religious leaders called the Prophets, worship an ancient civilization known as the Forerunners, who perished while defeating the parasitic Flood. The eponymous Halo Array are a group of immense, habitable, ring-shaped superweapons that were created by the Forerunners to destroy the Flood, but which the Covenant mistake for religious artifacts that, if activated, would transport them on a Great Journey to meet the Forerunners."></ColumnFullWidth>
            </Row>
          </ContentSection>

          {/* Twitch embed section */}
          <ContentSection className="container">
            <MajorHeader><Level2Header className="bold">Check Out Our Twitch Stream</Level2Header></MajorHeader>

            <Row>
              <TwitchChannelEmbed inputChannel="0pointgaming"></TwitchChannelEmbed>

              <TwitchDualItemColumn postImageSrc={AboutMe} postImageAlt={"TwitchHeaderAboutMe"} postDescription={"Welcome to my channel, my name is Justin, I enjoy coding, gaming, tv and movies etc, I'm a casual gamer looking to make it in this crazy fast paced world. Come and join me :) Lets have some fun."}></TwitchDualItemColumn>

              <TwitchDualItemColumn postImageSrc={HardWare} postImageAlt={"TwitchHeaderHardware"} postDescription={'Motherboard: Asus Prime Z390-A, \nCPU: Intel Core i7-9700K CPU @ 3.6GHz, \nGPU: MSI Geforce Gtx 1070 8GB, \nRam: 32GB 3200mhz DDR4, \nStorage: SSD & HDD storage 6.5 Terabytes , \nNetwork Upstream: 10mbit Network Downstream: 200mbit'}></TwitchDualItemColumn>

              <TwitchDualItemColumn postImageSrc={Schedule} postImageAlt={"TwitchHeaderSchedule"} postDescription={"I currently do not have an active streaming schedule but will work on putting one together sometime soon."}></TwitchDualItemColumn>

              <TwitchDualItemColumn postImageSrc={Youtube} postImageAlt={"TwitchHeaderYoutube"} postDescription={"Click the banner above to check out our youtube channel where we post programming tutorials and stream highlight clips."}></TwitchDualItemColumn>
            </Row>
          </ContentSection>

          <ContentSection className="container">
            <Row>
              <Level3Header className="bold">A Message From Our Partners | Download The Brave Browser Today</Level3Header>
              <p>Have you ever wanted to earn money from seeing or watching advertisements, Check out the Brave browser. The brave browser has a built in full scale ad blocking system which blocks all advertisements, cross-site cookies, trackers and protects your privacy while at the same time allowing you to Opt-In to a service which pays you in crypto-currency (BAT) for viewing advertisements. For more information click on our refferral link here to find out for yourself. <a href="https://brave.com/zer051">Download Brave.</a></p>
            </Row>
          </ContentSection>
        </MainArticle>

        <FooterSection />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3968373060464813" crossOrigin="anonymous"></script>
      </Wrapper>
  )
}

export default IndexPage