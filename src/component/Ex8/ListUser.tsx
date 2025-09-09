import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function ListUser() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {users.map((u) => (
                <div
                    key={u.id}
                    style={{
                        border: "1px solid gray",
                        padding: "10px",
                        width: "200px",
                        textAlign: "center",
                    }}
                >
                    <p><b>Id:</b> {u.id}</p>
                    <p><b>UserName:</b> {u.name}</p>
                    <p><b>Email:</b> {u.email}</p>
                    <p><b>Address:</b> {u.address}</p>
                    <Link to={`/user/${u.id}`}>
                        <button>Xem chi tiết</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}