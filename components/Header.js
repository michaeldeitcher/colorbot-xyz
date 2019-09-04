import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ReactSVG from 'react-svg'
import { connect } from "react-redux";
import { muiChangeStyleType } from "../store";

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

const mapStateToProps = state => ({ styleType: state.muiThemeType })

const ChangeStyleListItem = ({styleType, dispatch}) => {
    const toggleStyle = () => {
        dispatch(muiChangeStyleType((styleType === 'dark') ? 'light' : 'dark'));
        Router.push(Router.pathname);
    }

    const itemText = (styleType === 'dark') ? 'Go Light' : 'Go Dark';

    return (
        <ListItem button key={"Change theme"} onClick={() => toggleStyle()}>
            <ListItemText primary={itemText} />
        </ListItem>
    )
}

const ChangeStyleListItemContainer = connect(
    mapStateToProps
)(ChangeStyleListItem)

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
    }

    componentDidMount() {
        timer0 = setTimeout(restartTitleAnimation, animationDelay);
    }

    componentWillUnmount() {
        clearTimeout(timer0);
        clearTimeout(timer1);
    }

    showMenu() {
        this.setState({menuOpen: true});
    }

    hideMenu() {
        this.setState({menuOpen: false});
    }

    toggleTheme() {
        this.props.muiChangeStyleType('light');
        Router.push(Router.pathname)
    };

    render() {
        return (
            <>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton edge="start" color="primary" onClick={() => this.showMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Link href="/">
                    <ReactSVG src="/static/colorbot-xyz.svg" style={{maxWidth: '60%', paddingTop: '8px'}}/>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={this.state.menuOpen}>
                <div>
                    <IconButton onClick={() => this.hideMenu()}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ChangeStyleListItemContainer/>
                    <ListItem button key={"Resume"}>
                        <Link href="/professional">
                            <ListItemText primary="Professional Resume" />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            </>
        );
    }
}

export default Header;