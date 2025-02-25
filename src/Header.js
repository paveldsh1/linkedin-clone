import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkedInLogo from './assets/linkedin-logo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
        <div className="header__left">
            <img src={linkedInLogo} alt="LinkedIn" />
            <div className="header__search">
                <SearchIcon></SearchIcon>
                <input placeholder='Search' type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'></HeaderOption>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'></HeaderOption>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
            <HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'></HeaderOption>
            <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}></HeaderOption>
        </div>
    </div>
  )
}

export default Header;
