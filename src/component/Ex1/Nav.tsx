import { useNavigate, Outlet } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    return (
      <>
        <div>
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("about")}>About</button>
          <button onClick={() => navigate("contact")}>Contact</button>
        </div>
        <Outlet />
      </>
    );
}