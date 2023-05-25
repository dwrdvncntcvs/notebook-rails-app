import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

const AuthGuard = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default AuthGuard;
