import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({loginSuccess}) => {
    return loginSuccess ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes;