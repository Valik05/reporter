import './layout.css';
import classNames from "classnames";
import Header from '../components/Header/Header';
import SystemMsg from '../components/SystemMsg/SystemMsg';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <article className={classNames('layout-container')}>
            <SystemMsg />
            <Header />
            <Outlet />
        </article>
    )
};

export default Layout;
