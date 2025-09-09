import { useParams } from "react-router-dom";

const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === Number(id));

    if (!user) return <h2>Không tìm thấy user</h2>;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Thông tin chi tiết</h2>
            <div style={{ border: "1px solid gray", padding: "10px", width: "250px", margin: "auto" }}>
                <p><b>Id:</b> {user.id}</p>
                <p><b>UserName:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Address:</b> {user.address}</p>
            </div>
        </div>
    );
}