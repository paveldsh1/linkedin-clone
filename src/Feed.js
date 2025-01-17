import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => 
            setPosts(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, []); // пустой массив зависимостей означает, что эффект выполнится только при монтировании

    const sendPost = e => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Pavel Denisov',
            description: 'this is a test',
            message: input,
            photo: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon></CreateIcon>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text'></input>
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

            {posts.map(({ id, data: { name, description, message, photo }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photo={photo}
                ></Post>
            ))}
        </div>
    )
}

export default Feed
