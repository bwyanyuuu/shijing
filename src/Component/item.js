import React from 'react';
import itemData from "../json/itemData.json";
import story from '../img/story.png';

const ul = {
    listStyleType: 'none',
    padding: '0 8%',
    margin: '3% 0'
}

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.itemlist = this.itemlist.bind(this);
        this.view = this.view.bind(this);
        this.state={
            viewing: false,
            popTitle: '',
            popSubtitle: ''
        }
    }
    itemlist(s){
        let li = [];
        console.log(s);
        for(let i = 0; i < s; i++){
            li.push(
                <li className="block"><a href="#" onClick={this.view.bind(this, i)}>
                    <img src={story}></img>
                    <h2>{itemData.itemlist[i].title}</h2>
                    <p>{itemData.itemlist[i].subtitle}</p>
                </a></li>
            )
        }
        return(
            <ul style={ul}>
                {li}
            </ul>
        )
    }
    view(i){
        if(!this.state.viewing){
            this.setState({
                viewing: true,
                popTitle: itemData.itemlist[i].title,
                popSubtitle: itemData.itemlist[i].content,
            })
        }        
        console.log(this.state.viewing)
    }
    render(){
        return (
            <div className="content">
                <h3>在此可以檢視收集到的物品</h3>
                {this.itemlist(window.item)}
                {this.state.viewing && 
                    <div className="itemView">
                        <img src={story}></img>
                        <h2>{this.state.popTitle}</h2>
                        <p>{this.state.popSubtitle}</p>
                        <a href="#" onClick={() => this.setState({viewing: false})}>返回</a>
                    </div>
                }
            </div>
        )
    }
    
}
export default Item