import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;
const Logo = styled.img`
    height: 8rem;
    pointer-events: none;
`;
const AppTitle = styled.h1`
font-size: 4rem;
`;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
            <Logo src={logo} alt="React logo" />
            <AppTitle>Coin Exchange</AppTitle>
          </Header>
        );
    }
}
