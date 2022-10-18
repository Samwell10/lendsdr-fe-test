import "./Sidebar.scss";
import logo from '../../Image/logo.svg';
import {GoChevronDown} from 'react-icons/go'
import {FaBriefcase, FaHome, FaUserFriends, FaRegHandshake, FaHandHoldingUsd, FaUserCheck, FaUserTimes, FaCoins, FaUserCog, FaScroll, FaSlidersH, FaClipboardList, FaBars} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {GiCash} from 'react-icons/gi';
import {MdOutlineSavings} from 'react-icons/md';  
import {BsBank2} from 'react-icons/bs'
import {AiFillSetting, AiOutlineBarChart} from 'react-icons/ai'
import {BiBadgeCheck} from 'react-icons/bi';
import {GrTransaction} from'react-icons/gr'
import { useState } from "react";
const Sidebar = () => {
    const[isopen, SetIsopen] = useState(false);
    const screen = window.innerWidth;

    const toggle = () => SetIsopen(!isopen)
    return ( 
        <div className="sidebar" style={{width: isopen ? "340px" : '150px'}}>
            <div className="sidebar-top">
                <img src={logo} alt="logo" style={{display: isopen ? "block" : 'none'}}></img>
                <FaBars onClick={toggle} style={{marginLeft: isopen ? "0px" : '50px'}}/>
            </div>
            <div className="sidebar-center">
                <ul>
                    <li className="organisation">
                        <FaBriefcase className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Switch Organisation</span>
                        <GoChevronDown className="dropdown-icon"/>
                    </li>
                    <li>
                        <FaHome className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Dashboard</span>
                    </li>
                    <p className="sidebar-title">CUSTOMERS</p>
                    <li>
                        <FaUserFriends className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Users</span>
                    </li>
                    <li>
                        <HiUserGroup className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Guarantors</span>
                    </li>
                    <li>
                        <GiCash className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Loans</span>
                    </li>
                    <li>
                        <FaRegHandshake className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Decision Models</span>
                    </li>
                    <li>
                        <MdOutlineSavings className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Savings</span>
                    </li>
                    <li>
                        <FaHandHoldingUsd className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Loan Request</span>
                    </li>
                    <li>
                        <FaUserCheck className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Whitelist</span>
                    </li>
                    <li>
                        <FaUserTimes className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Karma</span>
                    </li>
                    <p className="sidebar-title">BUSINESSES</p>
                    <li>
                        <FaBriefcase className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Organisation</span>
                    </li>
                    <li>
                        <FaHandHoldingUsd className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Loan Products</span>
                    </li>
                    <li>
                        <BsBank2 className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Savings Product</span>
                    </li>
                    <li>
                        <FaCoins className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Fees and Charges</span>
                    </li>
                    <li>
                        <GrTransaction className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Transaction</span>
                    </li>
                    <li>
                        <AiFillSetting className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Services</span>
                    </li>
                    <li>
                        <FaUserCog className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Service Account</span>
                    </li>
                    <li>
                        <FaScroll className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Settlement</span>
                    </li>
                    <li>
                        <AiOutlineBarChart className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Reports</span>
                    </li>
                    <p className="sidebar-title">SETTINGS</p>
                    <li>
                        <FaSlidersH className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Preferences</span>
                    </li>
                    <li>
                        <BiBadgeCheck className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Fees and Pricing</span>
                    </li>
                    <li>
                        <FaClipboardList className="icon" style={{fontSize: isopen ? "16px" : '30px', marginLeft: isopen ? "0px" : '20%' }}/>
                        <span style={{display: isopen ? "block" : 'none'}}>Audit Logs</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidebar;