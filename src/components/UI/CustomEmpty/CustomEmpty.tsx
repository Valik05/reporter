import './customEmpty.css';
import Title from '../Title/Title';
import classNames from "classnames";

const CustomEmpty = () => {
    return (
        <article className={classNames('custom-empty-container')}>
            <Title
                color='gray'
                fontWeight={400}
                text='Nothing'
                headingLevel={5}
            />
        </article>
    )
};

export default CustomEmpty;
