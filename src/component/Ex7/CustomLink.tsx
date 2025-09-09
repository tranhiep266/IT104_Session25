import { Link } from "react-router-dom";

export default function CustomLink() {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Custom Link</h2>
            <Link to="/ex7/home-page">Go to Home Page</Link>
        </div>
    );
}