import React, { Component } from 'react';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ReactSVG from 'react-svg'

const animationDelay = 9000;
let timer0 = null;
let timer1 = null;
const restartTitleAnimation = () => {
    var element = document.getElementById("main-text");
    element.classList.remove("animate")
    void element.offsetWidth; // trigger a DOM reflow
    timer1 = setTimeout(restartTitleAnimationStep2, 1000);
}

const restartTitleAnimationStep2 = () => {
    var element = document.getElementById("main-text");
    element.classList.add("animate");
    timer0 = setTimeout(restartTitleAnimation, animationDelay);
}

class Header extends Component {

    componentDidMount() {
        timer0 = setTimeout(restartTitleAnimation, animationDelay);
    }

    componentWillUnmount() {
        clearTimeout(timer0);
        clearTimeout(timer1);
    }

    render() {
        return (
            <AppBar position="static" color="secondary">
                <Toolbar>
                    {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                        {/*<MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Link href="/">
                    <ReactSVG src="/static/colorbot-xyz.svg" style={{maxWidth: '60%', paddingTop: '8px'}}/>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;