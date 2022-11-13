import { Search } from '@mui/icons-material';
import React from 'react';
import "./Widget.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

export const Widget = () => {
    return (
        <div className='widget'>
            <div className="widget-input">
                <Search className='widget-search-icon' />
                <input type="text" placeholder='検索' />
            </div>
            <div className="widget-container">
                <h2>今どうしてる？</h2>

                {/* ライブラリを追加 */}
                <TwitterTweetEmbed tweetId={"1545532613657788416"} />
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='Shin_Engineer'
                    options={{ height: 400 }}
                />
                <TwitterShareButton className="twitter-share-button"
                    url={""}
                />
            </div>
        </div>
    )
}
