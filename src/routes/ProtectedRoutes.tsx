import { Navigate, Outlet } from "react-router-dom";
import type { ProtectedRoutesProps } from "../models/Routes/Routes";

const ProtectedRoutes = ({ isLoggenIn, redirectPath, children = false }: ProtectedRoutesProps) => {
    if (!isLoggenIn) return <Navigate to={redirectPath} replace />;
    return children ? children : <Outlet />;
};

export default ProtectedRoutes