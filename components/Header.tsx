"use client"

import styled from 'styled-components';

const HeaderMain = styled.header`
    display: flex;
    align-items: center;
    padding: 0.7rem 8rem;
    border-bottom: 0.01rem solid black;
`;

// header logo
const HeaderLogo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
`;

// right side navbar
const SideNavbar = styled.nav`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    ul {
        display: flex;
        list-style: none;

        li {
            margin-inline: 0.8rem;
        }
    }
`;

function Header() {
    return (
        <HeaderMain>
            <HeaderLogo>
                <h2>Z</h2>
                <h6>house</h6>
            </HeaderLogo>

            <SideNavbar>
                <ul>
                    <li>Hello</li>
                    <li>World</li>
                </ul>
            </SideNavbar>
        </HeaderMain>
    )
}

export default Header;
