import React,{useState,useEffect} from 'react'
import AdminMenu from '../../components/AdminMenu'
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    //getall users
    const getAllUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/users`);
        setUsers(data.allUsers);
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      }
    };

    useEffect(() => {
      getAllUsers();
    }, []);
    return (
        <div className="dashboard-container">

      <AdminMenu />

      <div className="create-category create-category2">
        <div>
          <h1 className="text-center">All Users ({users.length-1})</h1>
          <div className="user-box">
            {users?.map((p,index) => (

                  <div className="card-body">
                    {p.user_type!==1&&<h5 className="card-title">{p.first_name}  {p.last_name}</h5>}
                  </div>
            ))}
          </div>
        </div>

      </div>
    </div>

    )
}

export default Users