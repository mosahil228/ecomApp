import React from 'react'
import AdminMenu from '../../components/AdminMenu'
import {useAuth} from "../../context/auth"
import { RiAdminLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";

const AdminDashboard = () => {
    const [auth]=useAuth();
    return (
        <>
            <div className='dashboard-container'>
                <AdminMenu/>
                <div className="sellerDetails">
                    <h1><RiAdminLine/> {auth?.user?.first_name + auth?.user?.last_name } </h1>
                    <h1><CgMail/> {auth?.user?.email} </h1>    
                </div>
            </div>

        </>
    )
}

export default AdminDashboard