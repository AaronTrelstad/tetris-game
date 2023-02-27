import React from 'react';
import { StyledStartbutton } from './styles/StyledStartbutton';

const Startbutton = ({ callback }) => (
    <StyledStartbutton onClick={callback}>Start Game</StyledStartbutton>
)

export default Startbutton;