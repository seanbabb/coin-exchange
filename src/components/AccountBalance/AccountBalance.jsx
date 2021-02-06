import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.handleToggleShowBalance();
    }
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    const showAccountBalance = props.showBalance ? <span>Balance: ${props.amount} </span> : null;
    return (
        <Section>
            {showAccountBalance}
            <button onClick={handleClick} >{buttonText}</button>
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}