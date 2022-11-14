import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import "./Timeline.css";
import { TweetBox } from './TweetBox';
import db from "../../FIrebase";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";

const Timeline = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        //queryのorderByを使用して最新順に並び替え
        const q = query(postData, orderBy("timestamp", "desc"))
        // getDocs(q).then((querySnapshot) => {
        //     setPosts(querySnapshot.docs.map((doc) => doc.data()));
        // });

        //リアルタイムでデータを取得(onSnapShot)
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    return (
        <div className='timeline'>
            {/* Header */}
            <div className="timeline-header">
                <h3>ホーム</h3>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            {posts.map((post, index) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Timeline;
