import './Widget.scss'
import {BsPeople} from 'react-icons/bs';
import {HiOutlineUserGroup, HiOutlineClipboardList} from 'react-icons/hi';
import {GiCoins} from 'react-icons/gi'

interface Props{
    type: string
}
const Widgets: React.FC<Props> = ({type}) => {
    let data;
     switch (type) {
        case "users":
            data={
                icon: (<BsPeople className='data-icon' style={{
                    color:'#DF18FF',
                    background: " #e018ff16", 
                }}/>),
                title:"USERS",
                number: 2453,

            };
            break;
        case "active":
            data={
                icon: (<HiOutlineUserGroup className='data-icon' style={{
                    color:'#5718FF',
                    background: "#5618ff16", 
                }}/>),
                title:" ACTIVE USERS",
                number: 2453,
                
            };
            break;
        case "loans":
            data={
                icon: (<HiOutlineClipboardList className='data-icon' style={{
                    color:'#F55F44',
                    background: "#f55f4416", 
                }}/>),
                title:"USERS WITH LOANS",
                number: 12453,
                
            };
            break;
        case "savings":
            data={
                icon: (<GiCoins className='data-icon' style={{
                    color:'#FF3366',
                    background: "#ff336616   ", 
                }}/>),
                title:"USERS WITH SAVINGS",
                number: 102453,
            };
            break;
        default:
            break;
     }
    return ( 
        <div className="widget">
            <div className="widget-info">
                <div className="widget-icon">
                    {data?.icon}
                </div>
                <p className="widget-name">{data?.title}</p>
                <p className="widget-number">{data?.number}</p>
            </div>
        </div>
     );
}
 
export default Widgets;
