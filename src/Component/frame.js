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

const navbtn = {
    width: '25%',
    align: 'center',
    background: '#FFFFFF',
    alignContent: 'center'
};
const navbtnActive = {
    width: '25%',
    align: 'center',
    background: 'linear-gradient(135deg, #50c8ff, #da50ff)'
};
const navbtnImg = {
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
}

// funcs
const Header = (props) => {
    return (
        <div className="header">
        </div>
    )
}

class Frame extends React.Component{
    constructor(props) {
        super(props);
        this.rerender = this.rerender.bind(this);
        this.page = this.page.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.btn = this.btn.bind(this);
    }
    rerender() {
        this.forceUpdate();
    }
    page(p){
        if(p == "mission") return (<Mission />);
        else if(p == "story") return (<Story rerender={this.rerender}/>);
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
        if(state == "mission" && id == 1) return <a style={navbtnActive}><img src={nav11} style={navbtnImg}></img></a>;
        else if(state == "story" && id == 2) return <a style={navbtnActive}><img src={nav21} style={navbtnImg}></img></a>;
        else if(state == "item" && id == 3) return <a style={navbtnActive}><img src={nav31} style={navbtnImg}></img></a>;
        else if(state == "info" && id == 4) return <a style={navbtnActive}><img src={nav41} style={navbtnImg}></img></a>;
        else if(id == 1) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 1)}><img src={nav10} style={navbtnImg}></img></a>;
        else if(id == 2) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 2)}><img src={nav20} style={navbtnImg}></img></a>;
        else if(id == 3) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 3)}><img src={nav30} style={navbtnImg}></img></a>;
        else if(id == 4) return <a href="#" style={navbtn} onClick={this.handleClick.bind(this, 4)}><img src={nav40} style={navbtnImg}></img></a>;
    }
    render(){
        return (
            <div className="main">
                <Header />
                {this.page(window.page)}
                <div className="footer">
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