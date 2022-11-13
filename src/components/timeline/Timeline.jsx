import React from 'react';
import { Post } from './Post';
import "./Timeline.css";
import { TweetBox } from './TweetBox';


const Timeline = () => {
    return (
        <div className='timeline'>
            {/* Header */}
            <div className="timeline-header">
                <h3>ホーム</h3>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <Post
                displayName="Nakamura"
                username="nakamura_Engineer"
                text="Reactを勉強中"
                avatar="./images/1.jpeg"
                image=""
            />
        </div>
    )
}

export default Timeline;
