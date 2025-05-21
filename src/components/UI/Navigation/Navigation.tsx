import './navigation.css';
import classNames from 'classnames';
import CustomLink from '../CustomLink/CustomLink';
import BurgerMenuIcon from "../../../assets/icons/base/burger-menu-icon.svg?react";
import { useSideMenu } from '../../../context/useSideMenu';
import { NavigationLinks } from '../../../consts/NavLinks/NavLinks';

const Navigation = () => {
    const { setSideMenu } = useSideMenu();
    return (
        <nav className={classNames('nav-container')}>
            <article className={classNames("adaptive-icon")} onClick={() => setSideMenu("navigation")}><BurgerMenuIcon /></article>
            {NavigationLinks.map((item, index) => <CustomLink {...item} style={{ flexDirection: "row-reverse" }} key={index} />)}
        </nav>
    )
};

export default Navigation;
