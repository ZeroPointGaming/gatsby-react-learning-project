import styled from 'styled-components'

export const DropDownMenu = styled.ul
`
    background: linear-gradient(90deg,rgb(66, 66, 66) 100%, rgb(55, 55, 55) 0%, rgb(66, 66, 66) 100%);
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    padding-left:0px;
    justify-content: center;
`

export const DropDownLink = styled.a
`
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
`

export const DropDownListItem = styled.li
`
    cursor: pointer;
`

export const NaviBar = styled.nav`
    background: linear-gradient(90deg,rgb(66, 66, 66) 100%, rgb(55, 55, 55) 0%, rgb(66, 66, 66) 100%);
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2rem;
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
`

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
`

/* TODO: Finish Responsiveness */
export const NavMenu = styled.ul
`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }
`