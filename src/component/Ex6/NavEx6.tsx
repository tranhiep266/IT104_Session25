import { useNavigate, Outlet } from "react-router-dom";

export default function NavEx6() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <button onClick={() => navigate("homeEx6")}>Home</button>
                <button onClick={() => navigate("product")}>Porduct</button>
                <button onClick={() => navigate("detail")}>Detail</button>
            </div>
            <Outlet />
        </>
    );
}