// Step 1: Import React
import * as React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Wrapper, Banner, MainArticle, ContentSection, MajorHeader, Level2Header } from '../components/maincontrols.js'
import Column6u12u from '../components/column6u12u'

const IndexPage = () => {
  return (
      <Wrapper>
        <NavigationBar/>

        <Banner />

        <MainArticle>
          <ContentSection>
            <MajorHeader><Level2Header>The Games We Play, Record, and Stream</Level2Header></MajorHeader>

            <div className='row'>
              <Column6u12u postImageHref="" postImageSrc="https://wallpaperaccess.com/full/2121087.jpg" postImageAlt="#ZootGang #Tarkov" postHeader="ESCAPE FROM TARKOV" postDescription="Escape From Tarkov, a hardcore first person shooter survival game with extensively modernized gameplay elements not seen in any other games. In Escape From Tarkov not only do you have to battle AI controlled scavs, your own hunger and thirst, and the complex combat system, you also have to be aware of other players like yourself, all while hoarding what loot you can manage to find to take it home to your stash."></Column6u12u>
              <Column6u12u postImageHref="https://zeropointgaming.net/images/ksp-min.jpg" postImageSrc="https://zeropointgaming.net/images/ksp-min.jpg" postImageAlt="#ZootGang #KSP" postHeader="KERBAL SPACE PROGRAM" postDescription="Kerbal Space Program is a space flight simulation video game developed and published by Squad. In the game, players direct a nascent space program, staffed and crewed by green humanoid aliens known as 'Kerbals'."></Column6u12u>
            </div>

            <div className='row'>
              
            </div>

            <div className='row'>
              
            </div>
          </ContentSection>

          <ContentSection>

          </ContentSection>
        </MainArticle>
      </Wrapper>
  )
}

// Step 3: Export your component
export default IndexPage