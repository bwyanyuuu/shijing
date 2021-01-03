import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import navLogo from './../img/navLogo.png';
import nav10 from './../img/nav10.png';
import nav20 from './../img/nav20.png';
import nav30 from './../img/nav30.png';
import nav40 from './../img/nav40.png';
import nav11 from './../img/nav11.png';
import nav21 from './../img/nav21.png';
import nav31 from './../img/nav31.png';
import nav41 from './../img/nav41.png';

// css
const navbar = {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    display: 'flex'
};
const navbtn = {
    width: '25%',
    align: 'center'
};
const navbtnActive = {
    width: '25%',
    align: 'center',
    backgroundColor: '#0c377b'
};

// funcs
var state = "mission";
const Header = (props) => {
    return (
        <div class="header" style={{ width: '100%'}}>
            <a style={{ width: '100%'}}><img src={navLogo} style={{ width: '100%'}}></img></a>
        </div>
    )
}

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.btn = this.btn.bind(this);
    }
    handleClick(id){
        if(id == 1) state = "mission";
        else if(id == 2) state = "story";
        else if(id == 3) state = "item";
        else if(id == 4) state = "info";
        console.log(state);
        this.forceUpdate(); // update footer
    }
    btn(id, state){
        if(state == "mission" && id == 1) return <a style={navbtnActive}><img src={nav11} style={{ width: '100%'}}></img></a>;
        else if(state == "story" && id == 2) return <a style={navbtnActive}><img src={nav21} style={{ width: '100%'}}></img></a>;
        else if(state == "item" && id == 3) return <a style={navbtnActive}><img src={nav31} style={{ width: '100%'}}></img></a>;
        else if(state == "info" && id == 4) return <a style={navbtnActive}><img src={nav41} style={{ width: '100%'}}></img></a>;
        else if(id == 1) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 1)}><img src={nav10} style={{ width: '100%'}}></img></a>;
        else if(id == 2) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 2)}><img src={nav20} style={{ width: '100%'}}></img></a>;
        else if(id == 3) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 3)}><img src={nav30} style={{ width: '100%'}}></img></a>;
        else if(id == 4) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 4)}><img src={nav40} style={{ width: '100%'}}></img></a>;
    }
    render() {
        return(
        <div class="navbar" style={navbar}>
            {this.btn(1, state)}
            {this.btn(2, state)}
            {this.btn(3, state)}
            {this.btn(4, state)}
        </div>
    );}
}
const Main = (props) => {
    // 1st page is mission
    return (
        <div class="main">
            <Header />
            <Footer />
        </div>
    )
}

export default Main