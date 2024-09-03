import axios from 'axios';
import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email,setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response=await axios.post("http://localhost:3000/api/user/forgot-password",{email})
        if(response.data.status===200){
            toast.success(response.data.message)
            navigate("/login")
        } 
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
    }
    setEmail("");
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-gradient">
      <div className="bg-white p-3 rounded w-50">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
            <input
              type="email"
              name="email"
              className="form-control rounded-0"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
    
  );


}
export default ForgotPassword;