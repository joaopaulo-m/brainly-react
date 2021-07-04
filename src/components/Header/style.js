import styled from 'styled-components'

export const HeaderGeral = styled.header`
    width: 100%;
    height: 195px;
    background-color: #d9f0ff;
`
export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.img`
    width: 162px;
    height: 72px;
`
export const Nav = styled.ul`
    display: flex;
    align-items: center;
`
export const NavItem = styled.li`
    list-style: none;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-right: 16px;
    border-radius: 35px;
    padding: 0px 10px 0px 10px;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    
    &:hover {
        background-color: #cce2f1;
    }
`
export const Button = styled.button`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0px 20px 0px 20px;
    height: 40px;

    background-color: #fff;
    border-radius: 35px;

    &:hover {
        background-color: #f7f9fb;
    }
`

