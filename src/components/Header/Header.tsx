import './header.css';
import classNames from 'classnames';
import Button from '../UI/Button/Button';
import Navigation from '../UI/Navigation/Navigation';
import LoginIcon from '../../assets/icons/nav/login-icon.svg?react';
import { useAuth } from '../../context/useAuth';

const Header = () => {
    const { login, isAuth } = useAuth();
    return (
        <header className={classNames('header-container', { auth: isAuth })}>
            {isAuth || <Button
                text={"Login"}
                startIcon={<LoginIcon />}
                style={{ padding: "0.5rem 0.75rem" }}
                onClick={login}
            />}
            {isAuth && <Navigation />}
        </header>
    )
};

export default Header;
