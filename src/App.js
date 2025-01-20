import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">
      <Header></Header>

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
        </div>
      )}
    </div>
  );
}

export default App;
