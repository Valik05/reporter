import './loader.css';
import classNames from "classnames";

const Loader = () => {
    return (
        <article className={classNames('loader-container')}>
            <article className={classNames('loader')}></article>
        </article>
    )
};

export default Loader;
