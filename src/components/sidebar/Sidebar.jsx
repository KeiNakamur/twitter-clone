import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar-twitter-icon' />
            <SidebarOptions text="ホーム" Icon={HomeIcon} active />
            <SidebarOptions text="話題を検索" Icon={TagIcon} />
            <SidebarOptions text="通知" Icon={NotificationsNoneIcon} />
            <SidebarOptions text="ブックマーク" Icon={BookmarkBorderIcon} />
            <SidebarOptions text="メッセージ" Icon={MailOutlineIcon} />
            <SidebarOptions text="プロフィール" Icon={PermIdentityIcon} />
            <SidebarOptions text="もっと見る" Icon={MoreHorizIcon} />

            <button variant="contained" href="#contained-buttons" className='tweet-button' >ツイートする</button>
        </div>
    )
}

export default Sidebar;