import './layout.css';
import classNames from "classnames";
import Header from '../components/Header/Header';
import SystemMsg from '../components/SystemMsg/SystemMsg';
import SideMenu from '../components/UI/SideMenu/SideMenu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <article className={classNames('layout-container')}>
            <SideMenu />
            <SystemMsg />
            <Header />
            <Outlet />
        </article>
    )
};

export default Layout;
