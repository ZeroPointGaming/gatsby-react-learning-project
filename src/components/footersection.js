import * as React from 'react'

const FooterSection = () => (
    <footer id="footer">
        <ul className="copyright">
            <li>Visit my social media pages</li>
        </ul>

        <ul className="icons">
            <li>
                <a className="footerLink" href="https://discord.gg/8JTPZ2J">
                    <span className="label">
                        Discord
                    </span>
                </a>
            </li>

            <li>
                <a className="footerLink" href="https://github.com/ZeroPointGaming">
                    <span className="label">
                        Github
                    </span>
                </a>
            </li>

            <li>
                <a className="footerLink" href="https://www.instagram.com/0pointgaming/">
                    <span className="label">
                        Instagram
                    </span>
                </a>
            </li>

            <li>
                <a className="footerLink" href="https://twitch.tv/0PointGaming">
                    <span className="label">
                        Twitch
                    </span>
                </a>
            </li>

            <li>
                <a className="footerLink" href="https://twitter.com/0PointGaming">
                    <span className="label">
                        Twitter
                    </span>
                </a>
            </li>

            <li>
                <a className="footerLink" href="https://www.youtube.com/channel/UCQpXJZ9BTYWfAF0SDwbKaQg">
                    <span className="label">
                        Youtube
                    </span>
                 </a>
            </li>
        </ul>

        <ul className="copyright">
            <li>© Zero Point Gaming 2018-2021</li>
        </ul>
    </footer>
)

export default FooterSection
