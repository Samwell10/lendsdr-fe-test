import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './User.scss';
import UserDetails from "../../Components/UserDetaiils/UserDetails";

const User = () => {
    return ( 
        <div className="user">
            <div className="dashboard">
            <Sidebar/>
            <div className="dashboard-container">
                <Navbar/>
                <div className="dashboard-inner">
                    <div className="back">
                        <Link to="/dashboard">
                            <p className="back-to-dashboard">
                                <HiOutlineArrowNarrowLeft/><span>Back to User</span>
                            </p>
                        </Link>
                        <UserDetails/>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default User;