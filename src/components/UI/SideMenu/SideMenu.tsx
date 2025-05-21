import './sideMenu.css';
import classNames from 'classnames';
import CloseIcon from "../../../assets/icons/base/close-icon.svg?react";
import { useSideMenu } from '../../../context/useSideMenu';
import { SidemenuObj } from '../../../consts/SystemObj/Sidemenu';

const SideMenu = () => {
    const { sideMenu, setSideMenu } = useSideMenu();
    return (
        <article className={classNames("side-menu-container", { active: !!sideMenu })}>
            <article className={classNames("side-menu-close-icon")} onClick={() => setSideMenu(null)}><CloseIcon /></article>
            {sideMenu && <article className={classNames("side-menu-content-box")}>{SidemenuObj[sideMenu]}</article>}
        </article>
    )
};

export default SideMenu;
