import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useListUsersQuery } from "../redux/services/userServices";

function Home() {
    const [page, setPage] = useState(1);
    const { data: users, error, isLoading } = useListUsersQuery(page)
    const navigate = useNavigate()
    console.log(users)

    
    if (error) {
        return <div>{error}</div>;
    }
    if (isLoading) {
        return <div style={{textAlign : 'center'}}>Loading</div>;
    }

    if (!users?.data) {
        return <div>No Users :(</div>;
    }
    return (
        <div className="container">
            <h3 className="header">LIST CUSTOMER</h3>
            <table>
                <thead>
                    <tr>
                        <td>Customer</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map(({ id, name, status, email }) => (

                        <tr key={id} className="table-item">
                            <td>{name}</td>
                            <td><span className={status === 'active' ? 'green-dot' : 'red-dot'}>&bull;</span> {status}</td>
                            <td><button onClick={() => navigate('/user/'+id)} className="primary-button">view cust</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button className="primary-button" onClick={() => setPage(page - 1)} >
                    Previous
                </button>
                <button
                    className="primary-button"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;