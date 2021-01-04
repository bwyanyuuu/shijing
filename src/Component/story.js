import React from 'react';
import story from '../img/story.png';

const ul = {
    listStyleType: 'none',
    padding: '0 8%',
    margin: '3% 0'
}

class Story extends React.Component{
    constructor(props) {
        super(props);
        // this.page = this.page.bind(this);
    }
    review(id){

    }
    render(){
        return (
            <div className="story" style={{ width: '100%'}}>
                <p>Story</p>
                <ul style={ul}>
                    <li className="block"><a href="#" onClick={this.review.bind(this, 1)}>
                        <img src={story}></img>
                        <h2>標題</h2>
                        <p class="normal">副標題</p>
                    </a></li>
                </ul>
            </div>
        )
    }
    
}
export default Story