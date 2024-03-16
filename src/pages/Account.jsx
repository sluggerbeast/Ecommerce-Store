import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function Account() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "Saurabh",
    email: "saurabh@gamil.com"
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Simulate fetching user data from an API (replace with your actual logic)
  useEffect(() => {
    const fetchUserData = async () => {
      // const response = await fetch('/api/user');
      // const data = await response.json();
      // setUserData(data);
      if (!isLoggedIn) {
        navigate('/login');
      }
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading user data...</p>;
  }
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">My Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Profile Information</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <button onClick={()=>{navigate('/profile')}} className="btn bg-black text-white p-2 rounded-md mt-4">Edit Profile</button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Order History</h3>
          <p>View your past orders and track their status.</p>
          <button onClick={()=>{navigate('/orders')}} className="btn  bg-black text-white p-2 rounded-md mt-4">View Orders</button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Payment Methods</h3>
          <p>Manage your payment methods for future purchases.</p>
          <button className="btn  bg-black text-white p-2 rounded-md mt-4">Manage Payments</button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Wishlist</h3>
          <p>View and manage your saved wishlist items.</p>
          <button className="btn  bg-black text-white p-2 rounded-md mt-4">View Wishlist</button>
        </div>
      </div>
    </div>
  );
}


export default Account