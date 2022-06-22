import { useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery } from "../redux/services/userServices";

function Details() {
    const params = useParams();
    const navigate = useNavigate();
    const { data: user, error, isLoading } = useGetUserQuery(params.userId);

    console.log(user)
    if (error) {
        return <div>{error}</div>;
    }
    if (isLoading) {
        return <div style={{ textAlign: 'center' }}>Loading</div>;
    }

    if (!user?.data) {
        return <div>No User :(</div>;
    }

    return (
        <div className="container">
            <h3 className="header">CUSTOMER DETAILS</h3>
            <div className="flex">
                <div className="flex-item">
                    <div className="detail-item">
                        <h4 className="detail-label">Full Name</h4>
                        <div className="detail-value">{user?.data.name}</div>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-label">Gender</h4>
                        <div className="detail-value">{user?.data.gender}</div>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-label">Email</h4>
                        <div className="detail-value">{user?.data.email}</div>
                    </div>
                </div>
                <div className="flex-item">
                    <div className="detail-item">
                        <h4 className="detail-label">Status</h4>
                        <div className={user?.data.status === 'active' ? 'detail-status-green' : 'detail-status-red'}>{user?.data.status}</div>
                    </div>

                    <div className="detail-item">
                        <div onClick={() => navigate('/')} className={'detail-button-blue'}>RETURN TO LIST CUSTOMER</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;