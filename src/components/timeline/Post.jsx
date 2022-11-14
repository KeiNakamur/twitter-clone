import { ChatBubbleOutline, FavoriteBorder, PublicOffOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"


export const Post = ({ displayName, username, avatar, text }) => {
    return (
        <div className='post'>
            <div className="post-avatar">
                <Avatar src={avatar} className="avatar" />
            </div>
            <div className='post-body'>
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>{displayName}</h3>
                        <span className='post-header-special'>
                            {username}
                        </span>
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div className="post-footer">
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <PublicOffOutlined fontSize='small' />
                </div>
            </div>
        </div>
    )
}