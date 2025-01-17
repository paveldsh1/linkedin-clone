import React, {useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault()
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon></CreateIcon>
                    <form>
                        <input type='text'></input>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'></InputOption>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'></InputOption>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'></InputOption>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'></InputOption>
                </div>
            </div>

            {posts.map((post) => {
                <Post></Post>
            })}

            <Post 
                name='Pavel Denisov' 
                description='This is a test'
                message='WOW this worked'    
            ></Post>
        </div>
    )
}

export default Feed
