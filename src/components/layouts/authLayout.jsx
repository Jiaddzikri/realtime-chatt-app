import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen bg-[#202022] flex justify-center items-center">
            <Outlet />
        </div>
    )
}
export default AuthLayout;