import axios from 'axios';
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email,setEmail] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response=await axios.post("http://localhost:5000/api/user/forgot-password",{email})
        if(response.data.status===200){
            toast.success(response.data.message)
            navigate("/login")
        } 
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
    }
  }
}
