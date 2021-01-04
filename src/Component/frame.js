import React from 'react';
import Mission from './mission';
import Story from './story';
import Item from './item';
import Info from './info';

// images
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
    background: 'linear-gradient(135deg, #50c8ff, #da50ff)'
};

// funcs
const Header = (props) => {
    return (
        <div className="header" style={{ width: '100%'}}>
            <a style={{ width: '100%'}}><img src={navLogo} style={{ width: '100%'}}></img></a>
        </div>
    )
}

class Frame extends React.Component{
    constructor(props) {
        super(props);
        this.page = this.page.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.btn = this.btn.bind(this);
    }
    page(p){
        if(p == "mission") return (<Mission />);
        else if(p == "story") return (<Story />);
        else if(p == "item") return (<Item />);
        else if(p == "info") return (<Info />);
    }
    handleClick(id){
        if(id == 1) window.page = "mission";
        else if(id == 2) window.page = "story";
        else if(id == 3) window.page = "item";
        else if(id == 4) window.page = "info";
        console.log(window.page);
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
    render(){
        return (
            <div className="main">
                <Header />
                {this.page(window.page)}
                <div className="navbar" style={navbar}>
                    {this.btn(1, window.page)}
                    {this.btn(2, window.page)}
                    {this.btn(3, window.page)}
                    {this.btn(4, window.page)}
                </div>
            </div>
        )
    }
}

export default Frame