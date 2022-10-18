import './UserDetails.scss'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import avatar from '../../Image/avatar.png';
import star from '../../Image/star.png';
import unstar from '../../Image/unstar.png';
import GeneralDetails from './GeneralDetails';
import { useFetch } from '../../useFetch';


interface userdata {
    id: number;
    orgName: string;
    accountBalance: number;
    accountNumber: string;
    userName: string;
    email: string;
    phoneNumber: number;
    createdAt: string;
    profile: object;
    firstName:string;
    lastName: string;
    avatar: string; 
}
// interface profile{
//     firstName: string;
// }
const UserDetails = () => {
    const {id} = useParams();
    const [loading,setLoading] =useState(true)
    const [data, setData] = useState<userdata>()
    const[profile, setProfile] = useState<userdata>()
    const[error, setError] = useState('');
    useEffect(() => {
        loadData();
    },[]);
    const loadData = ()=>{
        axios( {method:'GET', url: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`})
        .then((response) => {
            setError("");
            setData(response.data);
            setProfile(response.data.profile)
            console.log(response.data)
        })
        .catch((error)=> {
            setError(error.message);
        })
        .finally(() => setLoading(false));
    };

    return ( 
        <div className="user-details">
            <div className="user-details-top">
                <div className="user-details-left">
                    <p>User Details</p>
                </div>
                <div className="user-details-right">
                    <button className="blacklist">BLACKLIST USER</button>
                    <button className="activate">ACTIVATE USER</button>
                </div>
            </div>
            {data && profile && (
            <div className="user-details-center">
                <div className="user-details-profile">
                    <div className="user-image-name">
                        <div className="user-image">
                            <img src={profile.avatar} alt="avatar"></img>
                        </div>
                        <div className="user-name">
                            <p className="name">{profile.firstName} {profile.lastName}</p>
                            <p className="number">{data.orgName}</p>
                        </div>
                    </div>
                    <div className="user-tier">
                        <p className='tier'>User's Tier</p>
                        <div className="user-star">
                            <img src={star}></img>
                            <img src={unstar}></img>
                            <img src={unstar}></img>
                        </div>
                    </div>
                    <div className="user-balance">
                        <p className="account-balance">N{data.accountBalance}</p>
                        <p className="account-number">{data.accountNumber}</p>
                    </div>
                </div>
                <div className="user-details-navigation">
                    <p className="nav-general active">General Details</p>
                    <p className='nav-document'>Documents</p>
                    <p className='nav-bank'>Bank Details</p>
                    <p className='nav-loan'>Loans</p>
                    <p className='nav-savings'>Savings</p>
                    <p className='nav-app'>App and System</p>
                </div>
            </div>)}
            <div className="user-details-bottom">
                <GeneralDetails/>
            </div>
        </div>
     );
}
 
export default UserDetails;