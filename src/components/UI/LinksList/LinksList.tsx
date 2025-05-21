import './linksList.css';
import classNames from 'classnames';
import CustomLink from '../CustomLink/CustomLink';
import type { NavLink } from '../../../models/NavLinks/NavLinks';

const LinksList = ({ links }: { links: NavLink[] }) => {
    return (
        <nav className={classNames("links-list-container")}>
            {links.map((item, index) =>
                <CustomLink
                    {...item}
                    style={{ flexDirection: "row-reverse", fontSize: "1.75rem" }}
                    key={index}
                />
            )}
        </nav>
    )
};

export default LinksList;
