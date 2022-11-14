import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../FIrebase";

export const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState([]);
    const [tweetImage, setTweetImage] = useState([]);

    const sendTweet = (e) => {
        //FirebaseのDBにデータを追加する
        e.preventDefault();

        //Firebaseのドキュメント参照
        addDoc(collection(db, "posts"), {
            displayName: "programming",
            username: "aaaaa",
            text: tweetMessage,
            avatar: "",
            image: tweetImage,
            //firestore内にある関数で時間を取得できる
            timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweet-box'>
            <form>
                <div className="tweet-box-input">
                    <Avatar />
                    <input
                        value={tweetMessage}
                        type="text"
                        placeholder='今どうしてる？'
                        onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </div>
                <input
                    value={tweetImage}
                    type="text"
                    className='tweet-box-image-input'
                    placeholder='画像のURLを入力してください'
                    onChange={(e) => setTweetImage(e.target.value)}
                />
                <button
                    className='tweet-box-tweet-button'
                    type="submit"
                    onClick={sendTweet}
                >ツイートする</button>
            </form >
        </div >
    )
}
