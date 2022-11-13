import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css";

export const TweetBox = () => {
    return (
        <div className='tweet-box'>
            <form>
                <div className="tweet-box-input">
                    <Avatar />
                    <input
                        type="text"
                        placeholder='今どうしてる？' />
                </div>
                <input
                    type="text"
                    className='tweet-box-image-input'
                    placeholder='画像のURLを入力してください'
                />
                <button className='tweet-box-tweet-button' type="submit">ツイートする</button>
            </form >
        </div >
    )
}
