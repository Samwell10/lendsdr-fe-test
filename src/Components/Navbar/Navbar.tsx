import './Navbar.scss'
import {BiSearch} from 'react-icons/bi';
import {HiOutlineBell} from 'react-icons/hi';
import {IoMdArrowDropdown} from "react-icons/io"
import profilepic from "../../Image/profile.png"
import {useState} from 'react'
const Navbar = () => {
    const[text, setText] = useState('');
    
    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input
                    type="text"
                    placeholder="Search for anything"
                    name="search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ></input>
                    <div className="search-icon">
                        <BiSearch/>
                    </div>
                </div>
                <div className="profile">
                    <div className="nav-doc"><p>Docs</p></div>
                    <HiOutlineBell className='notification-icon'/>
                    <div className="profile-image">
                        <img src={profilepic}></img>
                        <p className="profile-name">Adedeji</p>
                        <IoMdArrowDropdown className='dropdown-icon'/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;