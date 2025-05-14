import './header.css';
import classNames from 'classnames';
import Button from '../UI/Button/Button';
import Navigation from '../UI/Navigation/Navigation';
import LoginIcon from '../../assets/icons/nav/login-icon.svg?react';
import { useAuth } from '../../context/useAuth';
import { LOCAL_STORAGE } from '../../enums/localStorage';

const Header = () => {
    const { openAuthWS } = useAuth();
    return (
        <header className={classNames('header-container', { auth: !!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN) })}>
            {!!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN) || <Button
                text={"Login"}
                startIcon={<LoginIcon />}
                style={{ padding: "0.5rem 0.75rem" }}
                onClick={openAuthWS}
            />}
            {!!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN) && <Navigation />}
        </header>
    )
};

export default Header;
