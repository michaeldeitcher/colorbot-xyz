import React, { Component } from 'react';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ReactSVG from 'react-svg'

const animationDelay = 9000;
const restartTitleAnimation = () => {
    var element = document.getElementById("main-text");
    element.classList.remove("animate")
    void element.offsetWidth; // trigger a DOM reflow
    setTimeout(restartTitleAnimationStep2, 1000);
}

const restartTitleAnimationStep2 = () => {
    var element = document.getElementById("main-text");
    element.classList.add("animate");
    setTimeout(restartTitleAnimation, animationDelay);
}

class Header extends Component {

    componentDidMount() {
        setTimeout(restartTitleAnimation, animationDelay);
    }
    
    render() {
        return (
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <ReactSVG src="/static/colorbot-xyz.svg" style={{maxWidth: '60%', paddingTop: '8px'}}/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;