import './notFound.css';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
    return <Navigate to={"/report/create"} />
};

export default NotFound;
