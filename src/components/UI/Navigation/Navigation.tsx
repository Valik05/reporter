import './navigation.css';
import classNames from 'classnames';
import CustomLink from '../CustomLink/CustomLink';
import { NavigationLinks } from '../../../consts/NavLinks/NavLinks';

const Navigation = () => {
    return (
        <nav className={classNames('nav-container')}>
            {NavigationLinks.map((item, index) => <CustomLink {...item} style={{ flexDirection: "row-reverse" }} key={index} />)}
        </nav>
    )
};

export default Navigation;
