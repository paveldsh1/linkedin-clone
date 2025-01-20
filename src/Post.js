import React from 'react'
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import { ThumbUpAltOutlined, ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
import './Post.css'

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color='gray'></InputOption>
        <InputOption Icon={ChatOutlined} title="Comment" color='gray'></InputOption>
        <InputOption Icon={ShareOutlined} title="Share" color='gray'></InputOption>
        <InputOption Icon={SendOutlined} title="Send" color='gray'></InputOption>
      </div>
    </div>
  )
}

export default Post
