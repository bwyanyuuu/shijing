import React from 'react';
import storyData from "../json/storyData.json";
import story from '../img/story.png';

const ul = {
    listStyleType: 'none',
    padding: '0 8%',
    margin: '3% 0'
}

class Story extends React.Component{
    constructor(props) {
        super(props);
        this.storylist = this.storylist.bind(this);
        this.review = this.review.bind(this);
        // console.log(window.story);
    }
    storylist(s){
        let li = [];
        console.log(s);
        for(let i = 0; i < s; i++){
            li.push(
                <li className="block"><a href="#" onClick={this.review.bind(this, i)}>
                    <img src={story}></img>
                    <h2>{storyData.storylist[i].title}</h2>
                    <p>{storyData.storylist[i].subtitle}</p>
                </a></li>
            )
        }
        return(
            <ul style={ul}>
                {li}
            </ul>
        )
    }
    review(id){
        window.story += 1;
        window.story = window.story > storyData.storyNum ? storyData.storyNum : window.story;
        this.forceUpdate();
    }
    render(){
        return (
            <div className="content">
                <h3>在此可以回顧之前的劇情</h3>
                {this.storylist(window.story)}
            </div>
        )
    }
    
}
export default Story