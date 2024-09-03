import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ token }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/get-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {userData.length > 0 ? (
        userData.map((user, index) => (
          <div key={index} className="col mb-3">
            <div className="card px-3 py-4 shadow-sm">
              <div className="card-header">
                <strong>{user.username}</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title">{user.email}</h5>
                <p className="card-text">Role: {user.role}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No user data found.</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Profile;
