import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
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
    font-size: 3rem;
    line-height: 8rem;
    fold-weight: bold;
    min-width: 300px;
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
