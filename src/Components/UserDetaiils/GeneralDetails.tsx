import './GeneralDetails.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface userdata {
    firstName:string;
    lastName: string;
    phoneNumber: string;
    email: string;
    bvn: number;
    gender: string;
    level:string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail:string;
    monthlyIncome: string;
    loanRepayment:string;
    facebook: string;
    twitter: string;
    instagram: string;
    address: string;
}

const GeneralDetails = () => {
    const {id} = useParams();
    const [loading,setLoading] =useState(true)
    const [data, setData] = useState<userdata>()
    const[profile, setProfile] = useState<userdata>()
    const[edu, setEdu] = useState<userdata>()
    const[social, setSocial] = useState<userdata>()
    const[guarantor, setGuarantor] = useState<userdata>()
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
            setEdu(response.data.education)
            setSocial(response.data.socials)
            setGuarantor(response.data.guarantor)
            console.log(response.data)
        })
        .catch((error)=> {
            setError(error.message);
        })
        .finally(() => setLoading(false));
    };
    return ( 
        <div className="general-details">
            {data && profile && edu && social && guarantor && (<div className="general-details-inner">
                <div className="personal-info">
                    <p>Personal Information</p>
                <div className="personal-info-inner">
                        <div className="personal-details">
                            <p className="info-header">Full Name</p>
                            <p className="info">{profile.firstName} {profile.lastName}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Phone Number</p>
                            <p className="info">{profile.phoneNumber}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Email Address</p>
                            <p className="info">{data.email}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Bvn</p>
                            <p className="info">{profile.bvn}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Gender</p>
                            <p className="info">{profile.gender}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Marital status</p>
                            <p className="info">Single</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Children</p>
                            <p className="info">None</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Type of residence</p>
                            <p className="info">Parent’s Apartment</p>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <p>Education and Employment</p>
                    <div className="personal-info-inner">
                        <div className="personal-details">
                            <p className="info-header">level of education</p>
                            <p className="info">{edu.level}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">employment status</p>
                            <p className="info">{edu.employmentStatus}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">sector of employment</p>
                            <p className="info">{edu.sector}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Duration of employment</p>
                            <p className="info">{edu.duration}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">office email</p>
                            <p className="info">{edu.officeEmail}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Monthly income</p>
                            <p className="info">{edu.monthlyIncome[0]} - {edu.monthlyIncome[1]}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">loan repayment</p>
                            <p className="info">{edu.loanRepayment}</p>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <p>Socials</p>
                    <div className="personal-info-inner">
                        <div className="personal-details">
                            <p className="info-header">Twitter</p>
                            <p className="info">{social.twitter}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Facebook</p>
                            <p className="info">{social.facebook}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Instagram</p>
                            <p className="info">{social.instagram}</p>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <p>Guarantor</p>
                    <div className="personal-info-inner">
                        <div className="personal-details">
                            <p className="info-header">Full Name</p>
                            <p className="info">{guarantor.firstName} {guarantor.lastName}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Phone Number</p>
                            <p className="info">{guarantor.phoneNumber}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Address</p>
                            <p className="info">{guarantor.address}</p>
                        </div>
                        <div className="personal-details">
                            <p className="info-header">Gender</p>
                            <p className="info">{guarantor.gender}</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
     );
}
 
export default GeneralDetails;